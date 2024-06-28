import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  imports: [
    MenuModule,
    ButtonModule,
    FieldsetModule,
    CardModule,
    CarouselModule,
  ],
  exports: [
    MenuModule,
    ButtonModule,
    FieldsetModule,
    CardModule,
    CarouselModule,
  ],
})
export class PrimeNgModule {}
