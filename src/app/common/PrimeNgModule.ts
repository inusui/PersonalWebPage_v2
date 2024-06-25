import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';


@NgModule({
    imports: [
        MenuModule,
        ButtonModule,
        FieldsetModule
    ],
    exports: [
        MenuModule,
        ButtonModule,
        FieldsetModule
    ],
})
export class PrimeNgModule { }
