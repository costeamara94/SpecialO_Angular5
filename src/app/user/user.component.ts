import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    usersObservable: Observable<any[]>;

    constructor() {
    }

    ngOnInit() {
    }

}
