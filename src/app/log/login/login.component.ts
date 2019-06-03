import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from 'src/services/loginService';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MyDialogComponent} from '../../my-dialog/my-dialog.component';

export interface DialogData {
  user: string;
  mdp: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;
  private messageError: string;
  private visible = false;
  private result = '';
  private user;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router,
              public dialog: MatDialog) {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent,{
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  login() {
    const val = this.loginForm.value;

    if (val.username && val.password) {
      this.loginService.login(val.username, val.password)
        .subscribe(
          (result) => {
            console.log('User is logged in : ' + result['result']);
            this.user = result['user'];
            this.result = result['result']
              + ' : ' + this.user.firstName
              + ' ' + this.user.lastName
              + ', ' + this.user.email;
            this.loginService.saveToken(result['token']);
            this.loginService.setUser(
              {
                firstName: this.user.firstName,
                lastName: this.user.lastName,
                email: this.user.email
              }
            );
            this.router.navigateByUrl('/home');
          },
          error => {
            this.openDialog();
          }
        );
    }
  }

  ngOnInit() {
  }


  getErrorUsernameMessage() {
    const val = this.loginForm.value;
    return val.username.hasError('required') ? 'Vous devez entrer un nom d\'utilisateur ' : '';
  }

  getErrorPasswordMessage() {
    const val = this.loginForm.value;
    return val.password.hasError('required') ? 'Vous devez entrer un mot de passe' : '';
  }


}

