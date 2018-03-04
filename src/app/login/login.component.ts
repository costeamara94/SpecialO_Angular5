import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {AuthService} from '../core/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, private authService : AuthService) {}
    private email: string;
    private password: string;
    ngOnInit() {}

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
    onSignin() {
        console.log('fmm vladimir la login');
        this.email = ((document.getElementById('myEmail') as HTMLInputElement).value );
        this.password = ((document.getElementById('myPass') as HTMLInputElement).value );
        this.authService.signinUser(this.email, this.password);

              }

}
