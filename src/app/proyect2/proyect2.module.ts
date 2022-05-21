import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Proyect2RoutingModule } from './proyect2-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoComponent } from './info/info.component';

import { PacketComponent } from './packet/packet.component';
import { MapsComponent } from './maps/maps.component';
import {GoogleMapsModule} from "@angular/google-maps";
import { DescriptionComponent } from './description/description.component';


@NgModule({
    declarations: [
        NavbarComponent,
        InfoComponent,
        PacketComponent,
        MapsComponent,
        DescriptionComponent
    ],
  exports: [
    InfoComponent,
    MapsComponent,
    DescriptionComponent,
    PacketComponent
  ],
  imports: [
    CommonModule,
    Proyect2RoutingModule,
    GoogleMapsModule
  ]
})
export class Proyect2Module { }
