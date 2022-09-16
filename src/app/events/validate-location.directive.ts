import { Validators, FormGroup, NG_VALIDATORS } from '@angular/forms';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appValidateLocation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateLocationDirective,
      multi: true,
    },
  ],
})
export class ValidateLocationDirective implements Validators {
  constructor(private elementRef: ElementRef) {}

  validate(formgroup: FormGroup): any {
    console.log(formgroup.controls);
    const adressControl = formgroup.controls['address'];
    const cityControl = formgroup.controls['city'];
    const countryControl = formgroup.controls['country'];
    const onlineUrlControl = (<FormGroup>formgroup.root).controls['onlineUrl'];
    if (
      (adressControl &&
        adressControl.value &&
        cityControl &&
        cityControl.value &&
        countryControl &&
        countryControl.value) ||
      (onlineUrlControl && onlineUrlControl.value)
    ) {
      return null;
    } else {
      return { validateLocation: false };
    }
  }
}
