import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  email!: string;
  password!: string;

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.signUp(this.email, this.password).subscribe(response => {
      console.log('User signed up successfully');
    }, error => {
      console.error('Sign-up failed', error);
    });
  }


}
