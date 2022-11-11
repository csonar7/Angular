import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
//import { CustomerAppComponent } from './CustomerApp.';
import { CustomerAppComponent } from './CustomerApp.CustomerComponent';
import { GridComponent } from '../Utility/CustomerApp.GridComponent';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from '../Utility/Utility.HttpInterceptor';

@NgModule({
  declarations: [
    CustomerAppComponent, GridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CustomerRoutes),
    ReactiveFormsModule, HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass: MyInterceptor, multi:true}
  ],
  bootstrap: [CustomerAppComponent]
})
export class CustomerModule { }
