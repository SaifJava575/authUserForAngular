import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  loginId: string = '';
  password: string = '';
  response: any;
  errorMessage: string = '';

  constructor(private userService: AuthService,private router:Router) {}

  validateUser(): void {
    this.userService.signUp(this.loginId, this.password).subscribe(
      (response) => {
        this.router.navigateByUrl('menu')
        this.response = response;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'An error occurred while validating the user.';
        console.error(error);
      }
    );
  }
}
