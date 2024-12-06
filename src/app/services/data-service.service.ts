import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProject } from '../common/interfaces/IProject';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    return this.http.get('../../data/projects.json');
  }

  getSkills(): Observable<any> {
    return this.http.get('../../data/skills/skills.json');
  }

  getCustomSkils(): Observable<any> {
    return this.http.get('../../data/skills/custom.json');
  }

  getImages() {
    return Promise.resolve(this.getData());
  }

  getData(): Promise<any> {
    return firstValueFrom(this.http.get<any>('../../data/images.json'));
  }
}
