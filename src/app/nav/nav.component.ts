import { IEvent } from './../events/event.model';
import { EventService } from './../events/event.service';
import { AuthService } from './../user/login/auth.service';
import { Component } from '@angular/core';
import { ISession } from '../events/event.model';

@Component({
  selector: 'nav-app',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  constructor(public _auth: AuthService, private _EventService: EventService) {}
  searchTerm!: string;
  FoundSessions!: ISession[];
  events!: IEvent[];
  searchSessions(searchTerm: string) {
    this._EventService.searchSessions(searchTerm).subscribe((data) => {
      this.FoundSessions = data;
    });
  }
  ngOnInit(): void {
    this._EventService.GetEvents().subscribe((data) => {
      this.events = data;
    });
  }
}
