import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { FrontEndConfig, FrontEndConfigProvider } from '../configuration/configuration';
import { LogService } from './log.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'smart-ui-log',
  templateUrl: './ui-log.component.html',
  styleUrls: ['./ui-log.component.css']
})
export class UiLogComponent implements OnInit {

  private config: FrontEndConfig;

  constructor(private logService: LogService, @Inject(FrontEndConfigProvider) config) {
    this.config = config as FrontEndConfig;
  }

  ngOnInit() {
    const timer = Observable.timer(this.config.log.loggingInterval, this.config.log.loggingInterval);
    timer.subscribe(t => this.logService.store());
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent) {
    this.logService.storeLocally('click', e);
  }

  @HostListener('document:touchend', ['$event'])
  onTouchEnd(e: TouchEvent) {
    this.logService.storeLocally('touchend', e);
  }

}
