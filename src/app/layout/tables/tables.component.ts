import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {

    firstEvent = [{ 'name': 'South Carolina Law Enforcement', 'date': '1 - 28 Feb 2018', 'description': 'Multiple Polar Plunge fundraising event take place across the state, mostly during the month of March. Many Unified Champion Schools get involved with the events as a way to raise money and awareness for both Special Olympics South Carolina on a state level as well as their individual school’s Special Olympics program. Youth and other supporters take the plunge into frigid bodies of water on behalf of Special Olympics.', 'location':'Statewide South Carolina USA','competitions':'' }];
    secondEvent = [{ 'name': 'State Winter Games', 'date': '03 Feb 2018', 'description': '55 athletes from across Rhode Island will compete in the State Winter Games at Yawgoo Valley in Exeter, RI on Saturday, February 3rd. Sports include Alpine Skiing, Cross Country Skiing, Snowboarding and Snowshoeing. Medals will be awarded after final competitions.', 'location': 'Exeter RI USA', 'competitions': '' }];
    thirdEvent = [{ 'name': 'Special Olympics Burkina Faso National Games', 'date': '23 - 24 Feb 2018', 'description': 'The event will take place from 23 - 24 Feb 2018 with the participation of around 1800 athletes competing in 16 different sports , 450 coaches, 3000 volunteers and 100 honored guests. On the sidelines of the games several initiatives will be held: Healthy athletes program- Families forum- Young athletes demo- Youth Summit.', 'location':'Ouagadougou Burkina Faso' , 'competitions': '' }];

    allEvents = [this.firstEvent.values, this.secondEvent.values, this.thirdEvent.values];
    constructor() { }

    ngOnInit() {}
}
