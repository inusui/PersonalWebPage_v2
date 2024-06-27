import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DataService } from '../../services/data-service.service';
import { PrimeNgModule } from '../../common/PrimeNgModule';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CarouselModule, PrimeNgModule],
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
