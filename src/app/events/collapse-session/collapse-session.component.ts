import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse-session',
  templateUrl: './collapse-session.component.html',
  styleUrls: ['./collapse-session.component.css'],
})
export class CollapseSessionComponent implements OnInit {
  @Input() SessionName!: string;
  Visible = false;
  constructor() {}

  ngOnInit(): void {}
}
