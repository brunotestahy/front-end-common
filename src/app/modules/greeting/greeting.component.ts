import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Patient } from '../patient/patient';


@Component({
  selector: 'smart-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  @Input() patient: Patient;

  greeting: string;
  iconGreeting: string;
  myRoom: string;
  curHr: Date;
  firstName: string;

  constructor(private router: Router) { }

  // Considerar a possibilidade de mover esse método para um serviço.
  setGreetingImageAndText() {
    const curHr = (new Date()).getHours();
    if (curHr < 4) {
      this.greeting = 'Boa noite';
      this.iconGreeting = 'noite';
    } else if (curHr < 12) {
      this.greeting = 'Bom dia';
      this.iconGreeting = 'dia';
    } else if (curHr < 18) {
      this.greeting = 'Boa tarde';
      this.iconGreeting = 'tarde';
    } else {
      this.greeting = 'Boa noite';
      this.iconGreeting = 'noite';
    }
  }

  ngOnInit() {
    this.setGreetingImageAndText();
    // this.patient.name = this.capitalizeFirstLetter(this.firstName[0]);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

}
