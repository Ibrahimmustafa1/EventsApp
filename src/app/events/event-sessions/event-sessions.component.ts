import { VoterServiceService } from './../voter-service.service';
import { AuthService } from './../../user/login/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { ISession } from '../event.model';

@Component({
  selector: 'app-event-sessions',
  templateUrl: './event-sessions.component.html',
  styleUrls: ['./event-sessions.component.css'],
})
export class EventSessionsComponent implements OnInit {
  constructor(
    public auth: AuthService,
    private voterService: VoterServiceService
  ) {}
  @Input() sessions!: ISession[];
  @Input() FilterBy = '';
  @Input() SortBy = '';
  @Input() eventId!: number;

  FilterdSessions!: ISession[];
  ngOnInit(): void {}
  ngOnChanges(): void {
    if (this.FilterBy === 'all') this.FilterdSessions = this.sessions;
    else this.filterSession();
    this.SortBy === 'name'
      ? this.FilterdSessions.sort(SortByName)
      : this.FilterdSessions.sort(SortByVotes);
  }
  ToggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.auth.CurrentUser.userName);
    } else
      this.voterService
        .addVoter(session, this.auth.CurrentUser.userName, this.eventId)
        .subscribe();
    if (this.SortBy === 'votes') this.FilterdSessions.sort(SortByVotes);
  }
  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(
      session,
      this.auth.CurrentUser.userName
    );
  }

  filterSession() {
    this.FilterdSessions = this.sessions.filter((session) => {
      return session.level === `${this.FilterBy}`;
    });
  }
}
const SortByName = (s1: ISession, s2: ISession) => {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
};

const SortByVotes = (s1: ISession, s2: ISession) => {
  if (s1.voters.length > s2.voters.length) return -1;
  else if (s1.voters.length === s2.voters.length) return 0;
  else return 1;
};
