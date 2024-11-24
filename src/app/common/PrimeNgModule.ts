import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';

@NgModule({
  imports: [
    MenuModule,
    ButtonModule,
    FieldsetModule,
    CardModule,
    CarouselModule,
    ChipModule
  ],
  exports: [
    MenuModule,
    ButtonModule,
    FieldsetModule,
    CardModule,
    CarouselModule,
    ChipModule
  ],
})
export class PrimeNgModule {}
