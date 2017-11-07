import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

const KEY_DOWN = 40;
const KEY_UP = 38;
const KEY_ENTER = 13;
const KEY_ESC = 27;

const HIGHLIGHT = 'highlight';

@Component({
  selector: 'smart-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css']
})
export class SearchHeaderComponent implements OnInit {

  @ViewChild('suggestionBox') sb: ElementRef;

  @ViewChild('suggestionList') sl: ElementRef;

  @ViewChild('inputText') inputElement: ElementRef;

  @Input() width: string;

  @Input() margin: string;

  @Input() title: string;

  private _suggestions: Array<string>;

  @Input() set suggestions(suggestions: Array<string>) {
    this._suggestions = suggestions;
  }

  get suggestions(): Array<string> {
    if (this.showInvalidLengthMessage) {
      return null;
    }
    return this._suggestions;
  }

  @Input() placeHolder: string;

  @Input() invalidLengthMessage: string;

  @Output() updateSuggestions: EventEmitter<string> = new EventEmitter();

  listening: boolean;

  selectedSuggestion: number;

  showInvalidLengthMessage: boolean;

  constructor() { }

  ngOnInit() {
    this.showInvalidLengthMessage = false;
  }

  log(val) {
    console.log(val);
  }

  keyPress(value: string) {
    const valueLength = value == null ? 0 : value.trim().length;
    if (valueLength > 0 && valueLength <= 2) {
      this.showInvalidLengthMessage = true;
    } else {
      this.showInvalidLengthMessage = false;
      this.updateSuggestions.emit(value);
    }
  }

  inputFocus(): void {

    if (this.listening) {
      return;
    } else {
      this.listening = true;
    }

    this.selectedSuggestion = -1;

    const suggestionElement = (this.sb.nativeElement as HTMLDivElement);

    suggestionElement.style.display = 'block';

    const unregisterEventsNClose = () => {
      suggestionElement.style.display = 'none';
      window.removeEventListener('click', closeSuggestionBox);
      window.removeEventListener('keydown', verifyKey);
      if (this.selectedSuggestion !== -1) {
        const listItem = (this.sl.nativeElement as HTMLUListElement).querySelector('li.highlight').classList.remove('highlight');
      }
      this.listening = false;
      (document.activeElement as HTMLElement).blur();
    };

    const closeSuggestionBox = (event: Event) => {
      const elem = event.target as HTMLElement;
      if (elem.tagName.toLowerCase() !== 'input' || this.checkToClose(elem)) {
        unregisterEventsNClose();
      }
    };

    const verifyKey = (event: KeyboardEvent) => {

      if ([KEY_DOWN, KEY_UP, KEY_ENTER, KEY_ESC].indexOf(event.keyCode) > -1) {
        event.preventDefault();
      }

      switch (event.keyCode) {
        case KEY_DOWN: this.highlightElement(event, this.selectedSuggestion + 1); break;
        case KEY_UP: this.highlightElement(event, this.selectedSuggestion - 1); break;
        case KEY_ENTER: this.selectElement(); unregisterEventsNClose(); break;
        case KEY_ESC: unregisterEventsNClose(); break;
        default: if (this.selectedSuggestion !== -1) {
          const listItem = (this.sl.nativeElement as HTMLUListElement).querySelector('li.highlight').classList.remove('highlight');
          this.selectedSuggestion = - 1;
        }
      }
    };

    window.addEventListener('click', closeSuggestionBox);
    window.addEventListener('keydown', verifyKey);
  }

  selectElement(): void {
    if (!this.showInvalidLengthMessage) {
      const input = this.inputElement.nativeElement as HTMLInputElement;
      const listItems = (this.sl.nativeElement as HTMLUListElement).querySelectorAll('li');
      if (listItems.length !== 0 && this.selectedSuggestion !== -1) {
        input.value = listItems[this.selectedSuggestion].innerHTML.trim();
      }
    }
  }

  highlightElement(event: KeyboardEvent, index: number): void {
    event.preventDefault();
    if (!this.showInvalidLengthMessage) {
      const listItem = (this.sl.nativeElement as HTMLUListElement).querySelectorAll('li');
      if (listItem.length !== 0) {
        if (this.selectedSuggestion !== -1) {
          listItem[this.selectedSuggestion].classList.remove(HIGHLIGHT);
        }
        if (index !== -1 && index <= (listItem.length - 1) && index >= 0) {
          listItem[index].classList.add(HIGHLIGHT);
          this.selectedSuggestion = index;
        } else {
          listItem[this.selectedSuggestion].classList.add(HIGHLIGHT);
        }
      }
    }
  }

  checkToClose(target: HTMLElement): boolean {
    const parentClass = 'search-field';
    if (target.parentElement != null) {
      if (target.parentElement.classList.contains(parentClass)) {
        return false;
      }
      return this.checkToClose(target.parentElement);
    }
    return true;
  }

}
