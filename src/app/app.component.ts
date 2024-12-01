import { Component, OnInit } from '@angular/core';
import { PrimeNgModule } from './common/PrimeNgModule';
import { BannerComponent } from './components/banner/banner.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DataService } from './services/data-service.service';
import { ExperienceComponent } from "./components/experience/experience.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BannerComponent, PrimeNgModule, ProjectsComponent, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  products: any;
  responsiveOptions: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProjects().subscribe((data) => {
      this.products = data;
    });
  }

  navigate(){
    window.open('https://wifflegif.com/gifs/706312-pixel-art-nintendo-gif', '_blank');
  }
}
