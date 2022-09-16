import { JQ_TOKEN } from './jquery.service';
import { Directive, Inject, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[TestDirective]',
})
export class TestDirective implements OnInit {
  private el!: HTMLElement;
  @Input() TestDirective!: string;
  constructor(
    private _elementRef: ElementRef,
    @Inject(JQ_TOKEN) private $: any
  ) {
    this.el = _elementRef.nativeElement;
  }
  ngOnInit() {
    this.el.addEventListener('click', (e) => {
      this.$(`#${this.TestDirective}`).modal('show');
    });
  }
}
