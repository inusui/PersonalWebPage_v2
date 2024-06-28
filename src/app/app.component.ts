import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { PrimeNgModule } from './common/PrimeNgModule';
import { ProjectsComponent } from './components/projects/projects.component';
import { LastPublicationsComponent } from './components/last-publications/last-publications.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    BannerComponent,
    PrimeNgModule,
    ProjectsComponent,
    LastPublicationsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  articles: any;
  url: string =
    'https://www.redditmedia.com/user/inusui/comments/s9vbtp/html_javascript_boton_para_mostrarocultar_div/?ref_source=embed&ref=share&embed=true&showedits=false&created=2022-02-06T21:38:38.787Z';

  ngOnInit(): void {
    this.articles = [
      {
        url: 'https://www.reddit.com/user/inusui/comments/rv7hqe/contraseñas_aleatorias_en_menos_de_30_segundos/',
      },
      {
        url: 'https://www.reddit.com/user/inusui/comments/s9vbtp/html_javascript_boton_para_mostrarocultar_div/',
      },
      {
        url: 'https://www.reddit.com/user/inusui/comments/1almvay/configurar_gitbash_en_windows_terminal/',
      },
    ];
  }
}
