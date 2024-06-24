import { Component, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [TabMenuModule],
  templateUrl: './banner.component.html',
})
export class BannerComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { url: 'https://github.com/inusui', icon: 'pi pi-github' },
      { url: 'https://twitter.com/InuSui', icon: 'pi pi-twitter' },
      { url: 'https://linkedin.com/in/inusui', icon: 'pi pi-linkedin' },
    ];
  }
}
