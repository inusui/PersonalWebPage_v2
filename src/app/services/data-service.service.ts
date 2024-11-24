import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProject } from '../common/interfaces/IProject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    return this.http.get('../../data/projects.json');
  }

  getResponsiveOptions(){
    return this.http.get('../../data/responsiveOptions.json');
  }
}
