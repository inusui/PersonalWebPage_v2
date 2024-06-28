import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-last-publications',
  standalone: true,
  imports: [CarouselModule, CardModule],
  templateUrl: './last-publications.component.html',
  styleUrl: './last-publications.component.scss',
})
export class LastPublicationsComponent implements OnInit {
  articles: any;

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object) {}

  loadScript() {
    if (isPlatformBrowser(this.platformId)) {
      const script = this.document.createElement('script');
      script.src = 'https://embed.reddit.com/widgets.js';
      script.charset = 'UTF-8';
      this.document.body.appendChild(script);
    }
  }

  ngOnInit(): void {
    this.loadScript();
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
