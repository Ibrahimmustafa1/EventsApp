import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent } from '../event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
})
export class EditEventComponent implements OnInit {
  constructor(
    private router: Router,
    private event: EventService,
    private ActivatedRoute: ActivatedRoute
  ) {}
  newEvent: any | undefined;
  ngOnInit(): void {
    this.event
      .GetEventByID(Number(this.ActivatedRoute.snapshot.params['id']))
      .subscribe((event: IEvent) => {
        this.newEvent = event;
        console.log(this.newEvent);
      });
  }
  isDirty = true;
  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(event: IEvent) {
    Object.assign(event, this.newEvent);
    this.event.saveEvent(event).subscribe(() => {});
    this.isDirty = false;
    this.router.navigate([`/events/${event.id}`]);
  }
}
