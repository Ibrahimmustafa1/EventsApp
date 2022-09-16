import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IEvent, ISession } from './event.model';
@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  GetEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('/api/events');
  }

  GetEventByID(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(`/api/events/${id}`);
  }
  saveEvent(event: IEvent) {
    return this.http.post<IEvent>('/api/events', event);
  }

  searchSessions(searchTerm = '') {
    return this.http.get<ISession[]>(
      `/api/sessions/search?search=${searchTerm}`
    );
  }
}
