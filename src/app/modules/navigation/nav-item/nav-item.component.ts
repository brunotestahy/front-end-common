import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'smart-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {
  @Input('label') label: string;
  @Input('imgPath') imgPath: string;
  @Input('route') route: string;

  usedImgPath: string;

  div: HTMLDivElement;

  constructor(private routeService: Router) {
    this.routeService.events.subscribe(event => {
      if (this.imgPath != null) {
        this.updateUsedImagePath();
      }
    });
  }

  ngOnInit() {
    this.updateUsedImagePath();
  }

  updateUsedImagePath() {
    if (this.isActive()) {
      const slashIndex = this.imgPath.lastIndexOf('/') + 1;
      const fileName =
        this.imgPath.substring(0, slashIndex) +
        'active_' +
        this.imgPath.substring(slashIndex, this.imgPath.length);
      this.usedImgPath = fileName;
    } else {
      this.usedImgPath = this.imgPath;
    }
  }

  isActive() {
    return this.routeService.routerState.snapshot.url === this.route;
  }
}
