import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/common/toastr.service';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    public _auth: AuthService,
    private router: Router,
    private toast: ToastrService
  ) {}
  ProfileForm!: FormGroup;
  ngOnInit(): void {
    this.ProfileForm = new FormGroup({
      firstName: new FormControl(this._auth.CurrentUser.firstName, [
        Validators.required,
        Validators.pattern('[a-zA-Z].*'),
      ]),
      lastName: new FormControl(
        this._auth.CurrentUser.lastName,
        Validators.required
      ),
    });
  }
  SaveProfile(profileform: FormGroup) {
    if (this.ProfileForm.valid) {
      this._auth
        .UpdateUserProfile(
          profileform.value.firstName,
          profileform.value.lastName
        )
        .subscribe(() => {
          this.toast.success('updated');
        });
    }
  }
  cancel() {
    this.router.navigate(['/events']);
  }
  validatefirstname() {
    return (
      this.ProfileForm.controls.firstName.invalid &&
      this.ProfileForm.controls.firstName.touched
    );
  }
  validatelastname() {
    return (
      this.ProfileForm.controls.lastName.invalid &&
      this.ProfileForm.controls.lastName.touched
    );
  }
  logout() {
    this._auth.logout().subscribe(() => {
      this.router.navigate(['/user/login']);
    });
  }
}
