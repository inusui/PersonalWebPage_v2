import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service.service';
import { PrimeNgModule } from '../../common/PrimeNgModule';
import { RouterModule } from '@angular/router';
import { IProject } from '../../common/interfaces/IProject';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [PrimeNgModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  products: IProject[] = [];

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    
    this.dataService.getProjects().subscribe((data) => {
      this.products = data;
    });
  }

  goTo(url :string){
    window.open(url, '_blank');  
  }
}
