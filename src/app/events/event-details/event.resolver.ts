import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EventService } from '../event.service';

@Injectable({
  providedIn: 'root',
})
export class EventResolver implements Resolve<any> {
  constructor(private event: EventService) {}
  resolve(route: ActivatedRouteSnapshot): any {
    return this.event.GetEventByID(+route.params['id']);
  }
}
