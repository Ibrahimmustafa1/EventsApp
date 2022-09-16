import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISession } from './event.model';

@Injectable({
  providedIn: 'root',
})
export class VoterServiceService {
  constructor(private http: HttpClient) {}
  deleteVoter(session: ISession, voterName: string) {
    session.voters = session.voters.filter((voter) => voter !== voterName);
  }
  addVoter(session: ISession, voterName: string, eventId: any) {
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    session.voters.push(voterName);
    return this.http.post(url, {});
  }
  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some((voter) => voter === voterName);
  }
}
