import { JQ_TOKEN } from './jquery.service';
import { Duration } from './events/durationpipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventListComponent } from './events/event-list-component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventThumbnailComponent } from './events/event.thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { CreateSessionComponent } from './events/create-session/create-session.component';
import { EventSessionsComponent } from './events/event-sessions/event-sessions.component';
import { CollapseSessionComponent } from './events/collapse-session/collapse-session.component';
import { ModalComponent } from './modal/modal.component';
import { ModalTriggerDirective } from './modal-trigger.directive';
import { TestDirective } from './test.directive';
import { UpvoteComponent } from './events/upvote/upvote.component';
import { ValidateLocationDirective } from './events/validate-location.directive';
import { HttpClientModule } from '@angular/common/http';
declare let jQuery: any;
@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorpageComponent,
    EditEventComponent,
    CreateSessionComponent,
    EventSessionsComponent,
    Duration,
    CollapseSessionComponent,
    ModalComponent,
    ModalTriggerDirective,
    TestDirective,
    UpvoteComponent,
    ValidateLocationDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: JQ_TOKEN, useValue: jQuery }],
  bootstrap: [AppComponent],
})
export class AppModule {}
