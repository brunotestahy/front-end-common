import { Component, OnInit, Input, Output, AfterContentInit } from '@angular/core';
import { ContentChildren, QueryList, AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { OptionComponent } from './option/option.component';

const KEY_DOWN = 40;
const KEY_UP = 38;
const KEY_ENTER = 13;
const KEY_ESC = 27;

@Component({
  selector: 'smart-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit, AfterContentInit, AfterViewInit {

  private _value: string;
  @Output() valueChange = new EventEmitter();

  @Input() get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
    this.valueChange.emit(this._value);
  }

  @Input() id: string;
  @Input() name: string;
  @Input() placeHolder: string;
  @Input() width: string;
  @Output() change = new EventEmitter<string>();

  @ContentChildren(OptionComponent) options: QueryList<OptionComponent>;

  display: string;

  opened: boolean;

  highlightedOption: number;

  constructor(private eRef: ElementRef) { }

  ngOnInit() {
    this.opened = false;
  }

  onDisplayClick(event: MouseEvent) {

    this.opened = !this.opened;
    this.updateSpacerSize(true);

    if (this.opened === true) {

      this.highlightedOption = -1;

      const checkOutClick = (event2: MouseEvent) => {
        if (!this.eRef.nativeElement.contains(event2.target) || !this.opened) {
          unregisterEventsNClose();
          this.updateSpacerSize(true);
        }
      };

      const verifyKey = (event2: KeyboardEvent) => {

        if ([KEY_DOWN, KEY_UP, KEY_ENTER, KEY_ESC].indexOf(event2.keyCode) > -1) {
          event2.preventDefault();
        }

        switch (event2.keyCode) {
          case KEY_DOWN: this.highlightOption(this.highlightedOption + 1); break;
          case KEY_UP: this.highlightOption(this.highlightedOption - 1); break;
          case KEY_ENTER: this.selectOption(); unregisterEventsNClose(); break;
          case KEY_ESC: unregisterEventsNClose(); break;
        }
      };

      const unregisterEventsNClose = () => {
        window.removeEventListener('click', checkOutClick);
        window.removeEventListener('keydown', verifyKey);
        if (this.highlightedOption !== -1) {
          const options = this.options.toArray();
          options[this.highlightedOption].highlight = false;
        }
        this.opened = false;
      };

      window.addEventListener('click', checkOutClick);
      window.addEventListener('keydown', verifyKey);

    }
  }

  selectOption() {
    const options = this.options.toArray();
    if (this.highlightedOption !== -1) {
      const opt = options[this.highlightedOption];
      this.updateState(opt.value, opt.display);
    }
  }

  highlightOption(index: number) {
    const options = this.options.toArray();
    if (options.length !== 0) {
      if (this.highlightedOption !== -1) {
        options[this.highlightedOption].highlight = false;
      }
      if (index !== -1 && index <= (options.length - 1) && index >= 0) {
        options[index].highlight = true;
        this.highlightedOption = index;
      } else {
        if (this.highlightedOption !== -1) {
          options[this.highlightedOption].highlight = true;
        }
      }
    }
  }

  ngAfterContentInit() {
    this.options.forEach(option => {
      option.select = this;
      setTimeout(() => {
        if (option.value === this.value) {
          this.display = option.display;
        }
      }, 30);
    });
  }

  updateState(value: string, display: string) {
    this.value = value;
    this.display = display;
    this.opened = false;
    this.change.emit(value);
    this.updateSpacerSize(true);
  }

  updateSpacerSize(onlyWidth?: boolean) {
    setTimeout(() => {
      const selectField = (this.eRef.nativeElement as HTMLElement).querySelector('.select-field') as HTMLDivElement;
      const spacer = (this.eRef.nativeElement as HTMLElement).querySelector('.select-container div') as HTMLDivElement;
      spacer.style.width = `${selectField.offsetWidth}px`;
      if (onlyWidth !== true) {
        spacer.style.height = `${selectField.offsetHeight}px`;
      }
    }, 50);
  }

  ngAfterViewInit() {
    this.updateSpacerSize();
  }

}
