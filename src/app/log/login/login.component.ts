import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  messageError: string;
  visible = false;

  public loginForm: FormGroup;

  constructor(private router: Router, public formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  goHome() {
    this.router.navigate(['home']);
  }

  ngOnInit() {
  }

  getErrorUsernameMessage() {
    return this.username.hasError('required') ? 'Vous devez entrer un nom d\'utilisateur ' : '';
  }

  getErrorPasswordMessage() {
    return this.password.hasError('required') ? 'Vous devez entrer un mot de passe' : '';
  }

}
