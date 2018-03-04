import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {AuthService} from '../core/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor(private authService: AuthService) {}
    private email: string;
    private password: string;

    ngOnInit() {}
    printTest() {
        console.log('fmm vladimir');
        this.email = ((document.getElementById('myEmail') as HTMLInputElement).value );
        this.password = ((document.getElementById('myPass1') as HTMLInputElement).value );
        this.authService.signupUser(this.email, this.password);
        console.log(this.email);
        console.log(this.password);
    }
}
