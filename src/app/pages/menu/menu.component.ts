import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  
  menuLeft: MenuItem[] = [];

  ngOnInit() {
      this.menuLeft = [
        {
          label:'Home',
          icon:'pi pi-home',
          url: '/'
        },
        {
          label:'Blog',
          icon:'pi pi-paperclip',
          url: '#blog'
        }
      ];
  }    

}
