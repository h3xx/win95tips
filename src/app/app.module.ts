import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TipofthedayComponent } from './tipoftheday/tipoftheday.component';
import { WeirdMessageService } from './services';

@NgModule({
    declarations: [
        AppComponent,
        TipofthedayComponent,
    ],
    imports: [
        BrowserModule,
    ],
    providers: [
        WeirdMessageService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
