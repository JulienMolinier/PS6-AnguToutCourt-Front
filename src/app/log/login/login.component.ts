import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from 'src/services/loginService';
import {Router} from '@angular/router';
import {User} from '../../../models/User';

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
  private user: User;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router) {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const val = this.loginForm.value;

    if (val.username && val.password) {
      this.loginService.login(val.username, val.password)
        .subscribe(
          (result) => {
            console.log('User is logged in : ' + result.result);
            this.user = result.user;
            this.result = result.result;
            this.loginService.saveToken(result.token, this.user);
            this.loginService.setUser(this.user);
            if (this.user.isAdmin) {
              this.router.navigateByUrl('/administration');
            } else {
              this.router.navigateByUrl('/home');
            }
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
