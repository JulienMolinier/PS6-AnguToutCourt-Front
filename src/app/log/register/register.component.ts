import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Profile} from '../../../models/profile';
import {ProfileService} from 'src/services/profileService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router, private profileService: ProfileService) {

    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      major: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  register() {
    const profile = this.registerForm.getRawValue() as Profile;
    console.log(profile);
    this.profileService.postProfile(profile);
  }
}
