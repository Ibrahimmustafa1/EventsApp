import { ISession } from './../event.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css'],
})
export class CreateSessionComponent implements OnInit {
  @Output() CreateSession = new EventEmitter<Object>();
  @Output() Cancel = new EventEmitter();
  constructor() {}
  newSessionForm!: FormGroup;
  name!: FormControl;
  presenter!: FormControl;
  duration!: FormControl;
  level!: FormControl;
  abstract!: FormControl;
  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', Validators.required);
    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
    console.log('hi');
  }
  saveSession(SessionForm: FormGroup) {
    const session: ISession = {
      id: 1000,
      name: SessionForm.value.name,
      presenter: SessionForm.value.presenter,
      duration: SessionForm.value.duration,
      level: SessionForm.value.level,
      abstract: SessionForm.value.abstract,
      voters: [],
    };
    this.CreateSession.emit(session);
  }
  CancelSession() {
    this.Cancel.emit();
  }
}
