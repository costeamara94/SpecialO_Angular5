import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAVjHRAq955xcz_uHfIRCfLLYqNpIKVQ_s',
            authDomain: 'test-auth-28f0b.firebaseapp.com'





        });
    }
}
