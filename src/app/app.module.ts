import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JokeCardItemComponent } from './jokes/joke-card-item/joke-card-item.component';
import { JokeCardListComponent } from './jokes/joke-card-list/joke-card-list.component';

import { JokesModule } from './jokes/jokes.module';
import { HttpClientModule } from '@angular/common/http';
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule
} from '@angular/material';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, 
        HttpClientModule,
        MatCardModule,
        MatProgressBarModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        
        JokeCardListComponent,
        JokeCardItemComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

