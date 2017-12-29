import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'smart-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  opened: boolean;

  constructor(private eRef: ElementRef) { }

  ngOnInit() {
    this.opened = false;
  }

  toggle() {
    this.opened = !this.opened;
    const eventType = this.isTouchDevice() ? 'touchstart' : 'click';
    if (this.opened) {
      const closeClickOut = (event: MouseEvent) => {
        const elRef = this.eRef.nativeElement as HTMLElement;
        const icon = elRef.querySelector('.icon');
        const target = event.target as HTMLElement;
        if (!elRef.contains(target)) {
          this.opened = false;
          window.removeEventListener(eventType, closeClickOut);
        }else if (!this.opened && icon.contains(target)) {
          window.removeEventListener(eventType, closeClickOut);
        }
      };
      window.addEventListener(eventType, closeClickOut);
    }
  }

  isTouchDevice() {
    return 'ontouchstart' in window        // works on most browsers
        || navigator.maxTouchPoints;       // works on IE10/11 and Surface
  }

}
