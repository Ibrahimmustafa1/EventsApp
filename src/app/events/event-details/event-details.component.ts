import { IEvent } from './../event.model';
import { EventService } from './../event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'src/app/common/toastr.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  addMode = true;
  FilterBy = 'all';
  SortBy = '';
  constructor(
    private _EventService: EventService,
    private _ActivatedRoute: ActivatedRoute,
    private _ToastrService: ToastrService
  ) {}
  event: any;
  Toast(eventName: any) {
    this._ToastrService.error(eventName);
  }
  ngOnInit(): void {
    this._ActivatedRoute.params.forEach((params) => {
      this.event = this._ActivatedRoute.snapshot.data['event'];
      this.addMode = true;
      this.FilterBy = 'all';
      this.SortBy = '';
    });
  }
  ToggleComponents() {
    this.addMode = !this.addMode;
  }
  addSession(session: any) {
    const nextId = Math.max.apply(
      null,
      this.event.sessions.map((s: any) => s.id)
    );
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this._EventService.saveEvent(this.event).subscribe(() => {});
    this.addMode = !this.addMode;
  }
  CancelSession() {
    this.addMode = !this.addMode;
  }
}
