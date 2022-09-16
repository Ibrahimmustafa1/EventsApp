import { CreateSessionComponent } from './events/create-session/create-session.component';
import { EventResolver } from './events/event.list.resolver.service';
import { EventResolver as EventResolver2 } from './events/event-details/event.resolver';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './events/event-list-component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

import { CandeactivateGuard } from './candeactivate.guard';
import { EditEventComponent } from './events/edit-event/edit-event.component';

const routes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: [CandeactivateGuard],
  },
  {
    path: 'events',
    component: EventListComponent,
    resolve: { events: EventResolver },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    resolve: { event: EventResolver2 },
  },
  {
    path: 'events/edit/:id',

    component: EditEventComponent,
    canDeactivate: [CandeactivateGuard],
  },

  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'error', component: ErrorpageComponent },
  { path: 'events/session/new', component: CreateSessionComponent },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
