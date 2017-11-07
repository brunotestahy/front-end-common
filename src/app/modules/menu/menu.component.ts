import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'smart-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  opened: boolean

  constructor(private eRef: ElementRef) { }

  ngOnInit() {
    this.opened = false;
  }

  toggle() {
    this.opened = !this.opened;
    if (this.opened) {
      const closeClickOut = (event: MouseEvent) => {
        console.log('chamou');
        const elRef = this.eRef.nativeElement as HTMLElement;
        const icon = elRef.querySelector('.icon');
        const target = event.target as HTMLElement;
        if(!elRef.contains(target)){
          this.opened = false;
          window.removeEventListener('click', closeClickOut);
        }else if(!this.opened && icon.contains(target)){
          window.removeEventListener('click', closeClickOut);
        }
      };
      window.addEventListener('click', closeClickOut);
    }
  }

}
