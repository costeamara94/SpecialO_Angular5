import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    disabled = 0;
    email = '';
    pass = '';
    hovered = 0;
    message = '';

    constructor(public router: Router) {}

    ngOnInit() {}

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    onHover() {
        this.hovered = 1;
    }

    notHover() {
        this.hovered = 0;
    }

    setMessage() {
        if (this.email === '') {
            return 'Email can\'t be empty';
        } else if (this.pass.length === 0) {
            return 'Password can\'t be empty';
        } else if (this.email.indexOf('@') === -1 ||
            this.email.indexOf('@') === this.email.length - 1) {
            return 'Incorrect email';
        }
    }
}


