import { Component, OnInit } from '@angular/core';
import {
    WeirdMessageService,
} from '../services';

@Component({
    selector: 'app-tipoftheday',
    templateUrl: './tipoftheday.component.html',
    styleUrls: ['./tipoftheday.component.scss']
})
export class TipofthedayComponent implements OnInit {

    private msg: string;

    constructor(
        private weirdMessageService: WeirdMessageService,
    ) { }

    newMessage() {
        this.msg = this.weirdMessageService.getRandomMessage();
    }

    ngOnInit() {
        this.newMessage();
    }

}
