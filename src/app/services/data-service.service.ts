import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get('../../data/projects.json');
  }

  getResponsiveOptions(){
    return this.http.get('../../data/responsiveOptions.json');
  }
}
