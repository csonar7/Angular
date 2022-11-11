import { Component, Injector } from '@angular/core';
import { Customer } from './CustomerApp.model';
import { BaseLogger } from '../Utility/CustomerApp.Logger';
import { HttpClient } from '@angular/common/http';
@Component({
  
  templateUrl: './CustomerApp.CustomerView.html',
  
})
export class CustomerAppComponent {
  title = 'CustomerApp';
  CustomerModel : Customer = new Customer();
  CustomerModels : Array<Customer> = new Array<Customer>;
  logobj: BaseLogger = null ;
  Disable:boolean = false;
  constructor(_injector:Injector, public http:HttpClient){
    this.logobj = _injector.get("1");
      this.logobj.Log();
  }

  PosttoServer(){
    this.Disable=true;
    var custdto:any = {};
    custdto.CustomerCode= this.CustomerModel.CustomerCode;
    custdto.CustomerName = this.CustomerModel.CustomerName;
    custdto.CustomerAmount = this.CustomerModel.CustomerAmount;
    //http://localhost:3000/Customers
    this.http.post("http://localhost:3000/Customers", custdto)
    .subscribe(res=>this.Success,res=>this.Error)
  }

  GetFromServer(){
    this.http.get("http://localhost:3000/Customers")
    .subscribe(res=>this.SuccessGet,res=>this.Error)
  }

  Error(res){
    console.debug(res.json());
  }
  
  Success(){
    this.GetFromServer();
  }
  SuccessGet(res){
    this.CustomerModel = res;
    this.Disable = false;
    this.CustomerModel = new Customer();
  }

  SelecteCustomer(_selected:Customer){
      this.CustomerModel = _selected;
  }
  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }

  /*hasError(typeofvalidator: string, controlname:string): any{
        return this.CustomerModel
                  .formCustomerGroup
                  .hasError(typeofvalidator);
  }*/

}
