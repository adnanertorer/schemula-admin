import { Component, OnInit } from '@angular/core';
import { ApplicationUser } from '../models/ApplicationUser';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: ApplicationUser | undefined;
  private subscriptions: Subscription | undefined;

  private readonly accessTokenName = `${environment.access_token_name}`;
  returnClientMessage: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.user = {
      accessToken: '',
      email: '',
      fullName: '',
      password: '',
      refreshToken: '',
      role: '',
    };

    this.subscriptions = this.authService.user$.subscribe((x)=>{
      if(this.route.snapshot.url.length > 0){
        const access_token = localStorage.getItem(this.accessTokenName);
        if(x && access_token){
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
          this.router.navigate([returnUrl]);
        }
      }
    });
  }

  login() {
    if(!this.user?.email || !this.user.password)
      return;

    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
    this.authService.login(this.user).subscribe((data)=>{
      if(data.success)
        this.router.navigate([returnUrl]);
    }, (err)=>{
      console.log(err);
    });
  }

}
