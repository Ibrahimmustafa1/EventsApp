import { EventService } from './../event.service';
import { IEvent } from './../event.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  constructor(private router: Router, private event: EventService) {}
  isDirty = true;
  cancel() {
    this.router.navigate(['/events']);
  }
  newEvent: any;
  saveEvent(event: IEvent) {
    this.event.saveEvent(event).subscribe((data) => {
      console.log(data);
      this.isDirty = false;
      this.router.navigate([`/events/${data.id}`]);
    });
  }

  ngOnInit(): void {}
}
