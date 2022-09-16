import { Component, Inject, Input, OnInit, ElementRef } from '@angular/core';
import { JQ_TOKEN } from '../jquery.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() title!: string;
  @Input() elementId!: string;
  constructor(
    @Inject(JQ_TOKEN) private $: any,
    private _ElementRef: ElementRef
  ) {}
  closeModal() {
    this.$(`#${this.elementId}`).modal('hide');
  }

  ngOnInit(): void {}
}
