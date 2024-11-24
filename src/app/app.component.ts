import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { PrimeNgModule } from './common/PrimeNgModule';
import { ProjectsComponent } from './components/projects/projects.component';
import { LastPublicationsComponent } from './components/last-publications/last-publications.component';
import { DataService } from './services/data-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BannerComponent,
    PrimeNgModule,
    ProjectsComponent
],
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
}
