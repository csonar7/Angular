import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { AppRoutingModule } from '../app-routing.module';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { BaseLogger, ConsoleLogger, DBLogger } from '../Utility/CustomerApp.Logger';


var providerScoll:any= [];//Dynamic Collection
//http call get this by from the server
providerScoll.push({ provide: "1", useClass: DBLogger});
providerScoll.push({ provide: "2", useClass: ConsoleLogger});
providerScoll.push({ provide: BaseLogger, useClass: ConsoleLogger});
@NgModule({
  declarations: [
    MasterPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes),
  ],
  providers: [providerScoll],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
