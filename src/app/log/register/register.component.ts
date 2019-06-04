import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Profile} from '../../../models/profile';
import {ProfileService} from 'src/services/profileService';
import {MyDialogComponent} from '../../alerte/my-dialog';
import {register} from 'ts-node';
import {MatDialog} from '@angular/material';
import {catchError} from 'rxjs/operators';
import {AlertFormRegisterComponent} from '../../alerte/alert-form-register';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router, private profileService: ProfileService,
              public dialog: MatDialog) {

    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      major: ['', Validators.required]
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AlertFormRegisterComponent,
      { width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }


register() {
  const profile = this.registerForm.getRawValue() as Profile;
  console.log(profile);

  try {
    this.profileService.postProfile(profile);
    throw new Error('error1');

  } catch (e) {
    this.openDialog();
  }

}

}
