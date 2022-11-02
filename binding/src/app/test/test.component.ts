import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: ` <h2>Welcome {{name}}</h2>
          <h2>{{2+2}}</h2>
          <h3>{{"Welcome "+ name}}</h3>
          <h1>{{name.length}}</h1>
          <h1>{{name.toUpperCase()}}</h1>
          <h1>{{greetUser()}}</h1>
          <input type="text" value="Chetan"> 

          <h2 class="test-success">Welcome to my website</h2>
          <h2 [class]="successClass">Welcome to my website</h2>
          <h2 class="test-danger" [class]="successClass">Welcome to my website</h2>
  `,
  styles: [`
    .test-success{
      color: green;
    }
    .test-danger{
      color: red;
    }
    .test-special{
      font-style:italic;
    }`]
})
export class TestComponent implements OnInit {

  public name="Chetan";

  public successClass = "test-special";


  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "my name is chetan";
  }
}
