import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimeNgModule } from '../../common/PrimeNgModule';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Refresh',
            icon: 'pi pi-refresh',
          },
          {
            label: 'Export',
            icon: 'pi pi-upload',
          },
        ],
      },
    ];
  }
}
