import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEvent } from './event.model';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event.thumbnail.component.html',
})
export class EventThumbnailComponent {
  @Input() event!: IEvent;
  addClasses() {
    if (this.event.time === '10:00 am') return ['green', 'bold'];
    return [];
  }
}
