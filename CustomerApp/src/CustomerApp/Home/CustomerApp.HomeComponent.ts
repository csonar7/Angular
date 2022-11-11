import { Component } from '@angular/core';
import { BaseLogger } from '../Utility/CustomerApp.Logger';


@Component({

  templateUrl: './CustomerApp.HomeView.html',
  
})
export class HomeComponent{
  logobj: BaseLogger= null;

  constructor(_logger: BaseLogger){
    this.logobj=_logger;  
    this.logobj.Log();
  }
 
}
