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
    private github = 'https://github.com/h3xx/win95tips';

    msg: string;

    constructor(
        private weirdMessageService: WeirdMessageService,
    ) { }

    ngOnInit() {
        this.msg = this.weirdMessageService.getRandomMessage();
    }

    close() {
        this.msg = 'You can\'t escape.';
    }

    whatsNew() {
        window.location.href = this.github;
    }

    onlineRegistration() {
        window.location.href = this.github;
    }

    nextTip() {
        this.msg = this.weirdMessageService.getNextMessage();
    }

}
