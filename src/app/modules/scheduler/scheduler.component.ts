import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Schedule } from 'primeng/primeng';
import { Subscription } from 'rxjs/Subscription';
import { Scheduler } from '../model/model';
import { EnumEventCategory } from '../model/enum-event-category';

@Component({
  selector: 'smart-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('newEvent') newEvent: ElementRef;
  @ViewChild('schedule') scheduleElement: Schedule;

  // Inputs
  @Input() customScheduleObject: Scheduler;
  @Input() activeDay: Date = new Date();

  // Default events BG colors
  eventBgColors = {
    colorAllDay: '#F5F3F1',
    colorFood: '#F6EEDD',
    colorMedication: '#EBF1F2',
    colorFamily: '#F0E3E4'
  };

  defaultScheduleObject: Scheduler;

  dateEventSubscription: Subscription;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
    this.adjustEventTime();
    this.configureScheduler();
    this.fillEventsBgColors();
  }

  ngOnDestroy() {
    this.unloadGeneralListeners();
  }

  ngAfterViewInit() {
    this.buildScheduler();

    this.loadGeneralListeners();
  }

  loadGeneralListeners() {
    // Capture the calendar's date changing event
    // this.dateEventSubscription = this.scheduleService.handleDateChange$
    //   .subscribe((newDate: Date) => {
    //     this.scheduleElement.gotoDate(newDate);
    //     this.buildScheduler();
    //   });
  }

  unloadGeneralListeners() {
    // this.dateEventSubscription.unsubscribe();
  }

  adjustEventTime() {

    this.defaultScheduleObject = {
      header: {
        left: '',
        center: '',
        right: ''
      },
      newEventHeader: {
        active: true,
        title1: 'Olá, ',
        title2: '! Veja abaixo as atividades de hoje.',
        buttonLabel: 'Adicionar Evento',
        patientName: 'Bruno'
      },
      i18nLanguage: {
        active: false
      },
      allDayText: 'o dia\ntodo',
      events: [
        {
          title: 'Meeting Event'
        },
        {
          title: 'Another Meeting'
        },
        {
          title: 'Evento ao longo do dia.'
        }
      ],
      editable: true,
      aspectRatio: 1,
      slotEventOverlap: false,
      defaultView: 'agendaDay',
      scrollTime: '06:00:00',
      timeFormat: 'H:mm',
      options: {
        theme: false,
        slotLabelFormat: 'HH',
        themeSystem: 'bootstrap3'
      },
      ...this.customScheduleObject
    };

    console.log(this.customScheduleObject);
    const year = this.activeDay.getFullYear().toString();
    const month = (this.activeDay.getUTCMonth() + 1) < 10 ?
      '0' + (this.activeDay.getUTCMonth() + 1) :
      this.activeDay.getUTCMonth().toString();
    const day = this.activeDay.getUTCDate() < 10 ?
      '0' + this.activeDay.getUTCDate() :
      this.activeDay.getUTCDate().toString();

    this.defaultScheduleObject.events[0].start = `${year}-${month}-${day}T06:00:00`;
    this.defaultScheduleObject.events[0].end = `${year}-${month}-${day}T08:00:00`;
    this.defaultScheduleObject.events[0].category = 2;
    this.defaultScheduleObject.events[1].start = `${year}-${month}-${day}T06:00:00`;
    this.defaultScheduleObject.events[1].end = `${year}-${month}-${day}T07:00:00`;
    this.defaultScheduleObject.events[1].editable = false;
    this.defaultScheduleObject.events[1].category = 4;
    this.defaultScheduleObject.events[2].start = `${year}-${month}-${day}T06:00:00`;
    this.defaultScheduleObject.events[2].allDay = true;
    this.defaultScheduleObject.events[2].category = 1;
  }

  // Only the editable events receive this class
  assignEditableEventsElements() {
    const eventsElements = document.querySelectorAll('.fc-event');
    const contentEventsElements = document.querySelectorAll('.fc-event .fc-content');

    const events = this.customScheduleObject.events;

    for (let i = 0; i < eventsElements.length; i++) {
      for (let j = 0; j < events.length; j++) {
        if (events[j].editable === false) {
          continue;
        }

        if (eventsElements[i].innerHTML.indexOf(events[j].title) !== -1) {
          this.renderer.setAttribute(eventsElements[i], 'isEditable', 'true');
          this.renderer.setAttribute(contentEventsElements[i], 'isEditable', 'true');
        }
      }
    }
  }

  // Apply different attributes for every event's category
  assignCategoriesOnEventElements() {
    // Escape if already exist the logo content
    const logoEvent = document.querySelectorAll('.fc-logo-event');
    if (logoEvent.length) {
      return;
    }

    const eventsElements = document.querySelectorAll('.fc-time-grid-event');
    const referenceElements = document.querySelectorAll('.fc-time-grid-event .fc-content');

    const events = this.customScheduleObject.events;

    for (let i = 0; i < eventsElements.length; i++) {
      for (let j = 0; j < events.length; j++) {
        if (eventsElements[i].innerHTML.indexOf(events[j].title) !== -1) {

          // Background color in logo events
          const familyLogoBgColor = '#EBD0D2';
          const doctorLogoBgColor = '#DEF1F9';
          const foodLogoBgColor = '#F7EAC5';

          //  Category event description
          const descriptionLogoElement = this.renderer.createElement('div');
          this.renderer.addClass(descriptionLogoElement, 'logo-description');

          // Category event description text
          const familyLogoDescription = 'visita da<br>família';
          const doctorLogoDescription = 'médico<br>externo';
          const foodLogoDescription = {
            cafeManha: 'café da<br>manhã',
            almoco: 'almoço',
            jantar: 'jantar'
          };

          // Create logo container and the image element
          const newLogoWrapperElement = this.renderer.createElement('div');
          const newImageLogo = this.renderer.createElement('div');

          // Append the elements correctly
          this.renderer.appendChild(newLogoWrapperElement, newImageLogo);
          this.renderer.appendChild(newLogoWrapperElement, descriptionLogoElement);

          // Apply the correct style and structure for every event category
          switch (events[j].category) {
            case EnumEventCategory.allDay: {
              this.renderer.setAttribute(newLogoWrapperElement, 'category', EnumEventCategory[EnumEventCategory.allDay]);
              break;
            }
            case EnumEventCategory.hospitalRoutine: {
              this.renderer.addClass(newImageLogo, 'logo-doctor');
              this.renderer.setAttribute(newLogoWrapperElement, 'category', EnumEventCategory[EnumEventCategory.hospitalRoutine]);
              this.renderer.addClass(newLogoWrapperElement, 'fc-logo-event');
              this.renderer.setStyle(newLogoWrapperElement, 'background-color', doctorLogoBgColor);
              this.renderer.setProperty(descriptionLogoElement, 'innerHTML', doctorLogoDescription);
              this.renderer.insertBefore(eventsElements[i], newLogoWrapperElement, referenceElements[i]);
              break;
            }
            case EnumEventCategory.food: {
              this.renderer.addClass(newImageLogo, 'logo-food');
              this.renderer.setAttribute(newLogoWrapperElement, 'category', EnumEventCategory[EnumEventCategory.food]);
              this.renderer.addClass(newLogoWrapperElement, 'fc-logo-event');
              this.renderer.setStyle(newLogoWrapperElement, 'background-color', foodLogoBgColor);
              this.renderer.setProperty(descriptionLogoElement, 'innerHTML', foodLogoDescription.cafeManha);
              this.renderer.insertBefore(eventsElements[i], newLogoWrapperElement, referenceElements[i]);
              break;
            }
            case EnumEventCategory.family: {
              this.renderer.addClass(newImageLogo, 'logo-family');
              this.renderer.setAttribute(newLogoWrapperElement, 'category', EnumEventCategory[EnumEventCategory.family]);
              this.renderer.addClass(newLogoWrapperElement, 'fc-logo-event');
              this.renderer.setStyle(newLogoWrapperElement, 'background-color', familyLogoBgColor);
              this.renderer.setProperty(descriptionLogoElement, 'innerHTML', familyLogoDescription);
              this.renderer.insertBefore(eventsElements[i], newLogoWrapperElement, referenceElements[i]);
              break;
            }
          }
        }
      }
    }
  }

  // Build and place listening on events to edit and delete
  listeningEventButtons() {
    const editableElements = document.querySelectorAll('.fc-event[isEditable="true"]');

    for (let i = 0; i < editableElements.length; i++) {
      // Edit Button
      const editButtonElement = this.renderer.createElement('div');
      this.renderer.addClass(editButtonElement, 'event-edit-button');
      this.renderer.appendChild(editableElements[i], editButtonElement);
      this.renderer.listen(editButtonElement, 'click', (event) => {
        this.editEvent(event);
      });

      // Delete Button
      const deleteButtonElement = this.renderer.createElement('div');
      this.renderer.addClass(deleteButtonElement, 'event-delete-button');
      this.renderer.appendChild(editableElements[i], deleteButtonElement);
      this.renderer.listen(deleteButtonElement, 'click', (event) => {
        this.deleteEvent(event);
      });
    }
  }

  // Style the custom resizer on events
  styleResizeElement() {
    const containers = document.querySelectorAll('.fc-event[isEditable="true"]');

    // Add the new resizer
    for (let i = 0; i < containers.length; i++) {
      const newEvent = this.renderer.createElement('div');
      this.renderer.addClass(newEvent, 'custom-resizer');
      this.renderer.appendChild(containers[i], newEvent);
    }
  }

  // Initialize the Scheduler settings
  buildScheduler() {

    this.fillEventsBgColors();

    this.assignEditableEventsElements();

    this.assignCategoriesOnEventElements();

    this.listeningEventButtons();

    this.styleResizeElement();

  }

  // Apply different bgcolors for every kind of event
  fillEventsBgColors() {
    const allEvents = this.defaultScheduleObject.events;

    for (const event of allEvents) {
      switch (event.category) {
        case EnumEventCategory.allDay: {
          event.backgroundColor = this.eventBgColors.colorAllDay;
          break;
        }
        case EnumEventCategory.hospitalRoutine: {
          event.backgroundColor = this.eventBgColors.colorMedication;
          break;
        }
        case EnumEventCategory.food: {
          event.backgroundColor = this.eventBgColors.colorFood;
          break;
        }
        case EnumEventCategory.family: {
          event.backgroundColor = this.eventBgColors.colorFamily;
          break;
        }
      }
    }
  }

  // Assign just the new properties inserted
  configureScheduler() {
    this.customScheduleObject = this.defaultScheduleObject;
    console.log(this.customScheduleObject.newEventHeader.patientName);
  }

  // This method is called after the scheduler is rendered
  loadToAgendaView() {
    console.log(this.scheduleElement);
  }

  addNewEvent() {
    // this.scheduleService.emitModalOpen();
    console.log(this.scheduleElement);
  }

  editEvent(event) {
    for (let j = 0; j < this.customScheduleObject.events.length; j++) {
      if (event.target.parentNode.innerHTML.indexOf(this.customScheduleObject.events[j].title) !== -1) {
        // this.scheduleService.emitModalOpen();
        console.log(this.customScheduleObject.events[j]);
      }
    }
  }

  deleteEvent(event) {
    for (let j = 0; j < this.customScheduleObject.events.length; j++) {
      if (event.target.parentNode.innerHTML.indexOf(this.customScheduleObject.events[j].title) !== -1) {
        this.customScheduleObject.events.splice(j, 1);
        setTimeout(() => {
          this.assignEditableEventsElements();
          this.assignCategoriesOnEventElements();
          this.listeningEventButtons();
          this.styleResizeElement();
        });
      }
    }
  }

}
