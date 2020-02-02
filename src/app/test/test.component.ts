import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [`
   .text-success{
     color:green;
   }
   .text-danger{
     color:red;
   }
   .text-special{
     font-style:italic;
   }
  `]
})
export class TestComponent implements OnInit {

  public name = 'Mohammad';
  public siteUrl = window.location.href;
  public myId = '123id';

  // Classes
  public sucssesClass = 'text-success';
  public hasError =  false;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger':!this.hasError,
    'text-special':this.isSpecial
  }
  public greeting = '';
  public ref = '';
  public username= '';

  // First way
  // @Input() public parentData:string;
  //Second way
  @Input('parentData') public name1;

  @Output() public n = new EventEmitter();

  fireEvent(){
    this.n.emit('Hello guys out there!!');
  }

    // Pipes Data

    public myname= 'Mohammad Qaderi';
    public message = 'Welcome to my application';
    public person = {
      "firstname":"jehad",
      "lastname":"moneer"
    };

    public date = new Date();



  onClick(event){
    alert(event);
    this.greeting = event.type;
  }
  logMessage(value)
  {
    this.ref = value;
  }
  constructor() { }

  ngOnInit() {
  }

}
