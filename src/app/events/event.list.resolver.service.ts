import { EventService } from './event.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class EventResolver implements Resolve<any> {
  constructor(private EventService: EventService) {}
  resolve() {
    return this.EventService.GetEvents();
  }
}
