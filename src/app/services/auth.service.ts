import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { map, tap, delay, finalize } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ApplicationUser } from '../models/ApplicationUser';


@Injectable({
    providedIn: 'root',
})

export class AuthService implements OnDestroy{
    private readonly apiUrl = `${environment.apiUrl}`;
    private readonly accessTokenName = `${environment.access_token_name}`; 
    private readonly logoutEvent = `${environment.logout_event_name}`;
    // tslint:disable-next-line: variable-name
    private readonly access_time = `${environment.access_time}`;
    private timer: Subscription | undefined;
    // tslint:disable-next-line: variable-name
    private _user = new BehaviorSubject<ApplicationUser>(new ApplicationUser());
    user$: Observable<ApplicationUser> = this._user.asObservable();

    // tslint:disable-next-line: typedef
    private storageEventListener(event: StorageEvent){
        if (event.storageArea === localStorage){
            if (event.key === this.logoutEvent){
                this._user.next(new ApplicationUser());
            }
            if (event.key === this.logoutEvent){
                location.reload();
            }
        }
    }

    constructor(private router: Router, private http: HttpClient){
        window.addEventListener('storage', this.storageEventListener.bind(this));
    }

    ngOnDestroy(): void{
        window.removeEventListener('storage', this.storageEventListener.bind(this));
    }

    // tslint:disable-next-line: typedef
    login(resource: ApplicationUser) {
        return this.http
          .post<any>(`${this.apiUrl}/auth/login`, resource)
          .pipe(
            map((x) => {
                this._user.next({
                    email: x.data.email,
                    accessToken: x.access_token,
                    refreshToken: undefined,
                    password: undefined,
                    fullName: x.data.name,
                    role: x.data.role
                });
                const defaultUser = {
                    fullName: x.data.name,
                    email: x.data.email,
                };
                localStorage.setItem('user', JSON.stringify(defaultUser));
                this.setLocalStorage(x.access_token);
                return x;
            })
          );
      }

    register(name: string, surname: string, email: string, password: string, address: string, phone: string){
        return this.http
        .post<any>(`${this.apiUrl}company/create`, {name, surname, email, password, address, phone})
        .pipe(
            map((x) => {
                return x;
            })
        );
    }

    logout(){
        this.http.post<unknown>(`${this.apiUrl}/logout`, {})
        .pipe(
            finalize(() => {
                this.clearLocalStorage();
                this._user.next(new ApplicationUser());
                this.router.navigate(['']);
            })
        ).subscribe();
    }


    setLocalStorage(x: any){
        try {
            localStorage.setItem(this.accessTokenName, x);
        } catch (error) {
            console.error(error);
        }
        
    }

    clearLocalStorage(){
        localStorage.removeItem(this.accessTokenName);
        localStorage.setItem(this.logoutEvent, 'logout' + Math.random());
    }
}

