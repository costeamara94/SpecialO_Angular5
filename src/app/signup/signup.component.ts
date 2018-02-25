import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../router.animations';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    name = '';
    email = '';
    pass = '';
    pass2 = '';
    hovered = 0;
    message = '';

    constructor() {}

    ngOnInit() {}

    onHover() {
        this.hovered = 1;
    }

    notHover() {
        this.hovered = 0;
    }

    setMessage() {
        if (this.name === '') {
            return 'Name can\'t be empty';
        } else if (this.email === '') {
            return 'Email can\'t be empty';
        } else if (this.email.indexOf('@') === -1 ||
            this.email.indexOf('@') === this.email.length - 1) {
            return 'Incorrect email';
        } else if (this.pass.length === 0) {
            return 'Password can\'t be empty';
        } else if (this.pass2 !== this.pass) {
            return 'Passwords don\'t match';
        }
    }
}
