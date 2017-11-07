import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChild,
  ElementRef,
  EventEmitter
} from "@angular/core";
import { ThumbnailService } from "./thumbnail.service";
import { Practitioner } from "../practitioner/practitioner";

@Component({
  selector: "smart-practitioner-photo-chooser",
  templateUrl: "./practitioner-photo-chooser.component.html",
  styleUrls: ["./practitioner-photo-chooser.component.css"]
})
export class PractitionerPhotoChooserComponent implements OnInit {
  @Input() practitioner: Practitioner;
  @Input() endPointPath: string;
  @Input() placeHolder: string;

  @ViewChild("file") inputFile: ElementRef;

  @Output() error = new EventEmitter<void>();
  @Output() success = new EventEmitter<void>();

  constructor(private thumbnailService: ThumbnailService) {}

  ngOnInit() {}

  fileSelected() {
    const photo = (this.inputFile.nativeElement as HTMLInputElement).files[0];
    if (photo != null) {
      this.thumbnailService.toURI(photo).subscribe(
        data => {
          if (data.uri != null && data.uri.length !== 0) {
            this.practitioner.photo = data.uri;
            if (this.success != null) {
              this.success.emit();
            }
          }
        },
        () => {
          if (this.error != null) {
            this.error.emit();
          }
        }
      );
    }
  }
}
