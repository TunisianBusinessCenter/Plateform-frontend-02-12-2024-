import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Perform static login validation
    const validEmail = 'facepro2024';
    // const validPassword = '';
    const validPassword = 'MA80udkv';

    // Check if the entered credentials match the static credentials
    if (this.email === validEmail && this.password === validPassword) {
      this.isLoggedIn = true;
      this.isLoginFailed = false;

      // Redirect to the home page on successful login
      this.router.navigate(['conception/ajouterConception']);
    } else {
      this.isLoggedIn = false;
      this.isLoginFailed = true;
      this.errorMessage = "Le nom d'utilisateur et le mot de passe n'ont pas été reconnus";
    }
  }
}
