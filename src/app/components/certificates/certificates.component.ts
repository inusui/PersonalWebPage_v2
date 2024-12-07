import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
})
export class CertificatesComponent implements OnInit {
  images: any[] | undefined;
  activeIndex: number = 0;

  responsiveOptions: any[] | undefined;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getImages().then((images) => {
      this.images = images;
    });
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
  }
}
