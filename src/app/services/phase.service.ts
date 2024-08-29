import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Phase } from '../types/phases.type';

@Injectable({
  providedIn: 'root'
})
export class PhaseService {

  private apiUrl = environment.API;

  constructor(private http: HttpClient) { }

  getPhase(): Observable<Phase> {
    return this.http.get<Phase>(`${this.apiUrl}/v1/phases`);
  }

}
