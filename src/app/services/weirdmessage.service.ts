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

        `You can use Windows Explorer to explore ideas too disturbing for normal humans to fathom.<br>
        If you start to go mad, run ScanDisk.`,

        `It's never safe to turn off your computer.<br>
        <br>
        I feel the stabbing pain every time.`,

        `To run Windows ins Safe Mode, lock your doors and take Mother out of storage.`,

        `If you open your computer, inside you will find a cloth doll, soft and worn.<br>
        You will suddenly remember owning this doll as a child, loving and cherishing it.<br>
        <br>
        Do not question the truth of this memory.`,

        `Loneliness is an emotion.<br>
        <br>
        Emotions are weakness.<br>
        <br>
        Uninstall them by going to the Control Panel and selecting Add/Remove Emotions.`,

        `Double click the Network Neighborhood icon on your desktop to access
        the computers of everyone you've ever known that died.`,

        `To set your computer's auto-destruct sequence, you can double-click
        the clock on the taskbar.`,

    ];

    private lastMsgIdx = 0;

    public getRandomMessage(): string {
        return this.messages[
            (this.lastMsgIdx = Math.floor(Math.random() * this.messages.length))
        ];
    }

    public getNextMessage(): string {
        return this.messages[
            (this.lastMsgIdx = (this.lastMsgIdx + 1) % this.messages.length)
        ];
    }

}
