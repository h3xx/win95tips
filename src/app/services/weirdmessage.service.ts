import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class WeirdMessageService {
    constructor() { }

    private messages: string[] = [

        `Touch your monitor. It is warm, like flesh.<br>
        But it is not flesh.<br>
        Not yet.`,

        `In the last six months, 14 people from your<br>
        town have been reported missing.<br>
        <br>
        You haven't checked your Recycle Bin in about that long.`,

        `A small needle at the base of your mouse has<br>
        been gradually collecting your blood.<br>
        <br>
        The backup is almost complete.`,

        `If you listen to CLOUDS.MID backwards, you will go to sleep
        and have an amazing dream. In it, one by one, you meet the Microsoft Windows 95 Product Team.
        Finally, you get to Mr. Gates. You reach out to shake his hand, but instead,
        he puts something in your palm. He smiles. You wake up.<br>
        In your hand will be a small, white egg.`,

        `Your Internet connection is working fine;<br>
        No one replies to your e-mails because there is no one left.`,

    ];

    getRandomMessage(): string {
        return this.messages[Math.floor(Math.random() * this.messages.length)];
    }
}
