import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IconModule,PageHeaderModule,AccessibilityModule, ColorServiceModule, colorSets,PaginationModule } from '@ux-aspects/ux-aspects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProdctService } from './Services/prodct.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
  ],
  imports: [
    AccessibilityModule,
        ColorServiceModule.forRoot(colorSets.keppel),
    IconModule.forRoot({
      icons: [
          { name: '3d', icon: 'qtm-icon-ci', iconset: 'qtm-font-icon' , size: '14px'},
          { name: 'alert', icon: 'qtm-icon-alarm', iconset: 'qtm-font-icon', size: '16px'}
      ]
  }),
  PageHeaderModule,
  PaginationModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [ProdctService],
  bootstrap: [AppComponent],
})
export class AppModule { }
