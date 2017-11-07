import { Component, OnInit } from '@angular/core';
import { Scheduler } from '../../modules/model/model';

@Component({
  selector: 'smart-scheduler-page',
  templateUrl: './scheduler-page.component.html',
  styleUrls: ['./scheduler-page.component.css']
})
export class SchedulerPageComponent implements OnInit {

  schedulerConfig: Scheduler = {
    practitioner: {
      thumbnail: {
        height: '10%',
        width: '10%',
        border: '5px solid #F2D6D3',
        photo: 'https://www.portalaz.com.br/images/316328/2017%2F06%2F06%2F4ad031ac-f0ce-433a-805f-bcf3140ee1d8%2Ffile'
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
