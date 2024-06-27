import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CarouselModule, ButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  products: any;
  responsiveOptions: any;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getProjects().subscribe((data) => {
      this.products = data;
    });
    this.dataService.getResponsiveOptions().subscribe((data) => {
      this.responsiveOptions = data;
    });
  }

}
