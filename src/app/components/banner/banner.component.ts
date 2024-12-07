import { Component, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ChipModule } from 'primeng/chip';
import { privateData } from '../../common/constans';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [TabMenuModule, ChipModule, AvatarModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {
  items: MenuItem[] | undefined;
  privateData = privateData;

  ngOnInit() {
   
    this.items = [
      { url: 'https://github.com/inusui', icon: 'pi pi-github' },
      { url: 'https://twitter.com/InuSui', icon: 'pi pi-twitter' },
      { url: 'https://linkedin.com/in/inusui', icon: 'pi pi-linkedin' },
      { url: 'https://inusui.medium.com/', icon: 'icon icon-medium' },
    ];
  }
}
