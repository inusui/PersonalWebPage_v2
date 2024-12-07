import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';
import { FieldsetModule } from 'primeng/fieldset';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  imports: [
    MenuModule,
    ButtonModule,
    FieldsetModule,
    CardModule,
    CarouselModule,
    ChipModule,
    AvatarModule
  ],
  exports: [
    MenuModule,
    ButtonModule,
    FieldsetModule,
    CardModule,
    CarouselModule,
    ChipModule,
    AvatarModule
  ],
})
export class PrimeNgModule {}
