import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimeNgModule } from '../../common/PrimeNgModule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Menu',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-home',
            route: '',
          },
          {
            label: 'Blog Personal',
            icon: 'pi pi-book',
            route: '/guides/csslayer',
          },
          {
            label: 'Programmatic',
            icon: 'pi pi-link',
            command: () => {
              this.router.navigate(['/installation']);
            },
          },
          {
            label: 'External',
            icon: 'pi pi-home',
            url: 'https://angular.io//',
          },
        ],
      },
    ];
  }
}
