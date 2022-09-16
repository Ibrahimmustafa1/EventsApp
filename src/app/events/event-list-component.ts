import { ToastrService } from './../common/toastr.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './event.model';

@Component({
  selector: 'event-list',
  templateUrl: './event-list-component.html',
})
export class EventListComponent implements OnInit {
  constructor(
    private _ToastrService: ToastrService,
    private router: ActivatedRoute
  ) {}
  events!: IEvent[];

  ngOnInit() {
    this.events = this.router.snapshot.data['events'];
  }
}
