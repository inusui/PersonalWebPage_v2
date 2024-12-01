import { Component, OnInit } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { PrimeNgModule } from './common/PrimeNgModule';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DataService } from './services/data-service.service';
import { ISkills } from './common/interfaces/ISkills';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BannerComponent,
    PrimeNgModule,
    ProjectsComponent,
    ExperienceComponent,
    TagModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  icons: ISkills[] = [];
  customIcons:ISkills[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getSkills().subscribe((data) => {
      this.icons = data;
    });
    this.dataService.getCustomSkils().subscribe((data) => {
      this.customIcons = data;
    })
  }

  navigate(url: string) {
    window.open(url, '_blank');
  }
}
