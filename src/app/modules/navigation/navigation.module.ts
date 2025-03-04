import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule
  ]
})
export class NavigationModule { }
