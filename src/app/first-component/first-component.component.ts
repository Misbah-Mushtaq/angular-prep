import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
}) //Decorator
export class FirstComponentComponent implements OnInit {
  // public colors = ["purple", "red", "blue", "orange", "yellow"]
  // displayName = true;
  // @Input() public parentData = "";
  // @Input('parentData') public name:string = "";
  // @Output() public childEvent = new EventEmitter()
  public name = "Hey angular Prepration"
  public person = {
    "firstName" : "Misbah",
    "lastName" : "Mushtaq"
  }
  public date = new Date()
  constructor() { }
  ngOnInit(): void {
  }
    // toggleDisplay(){
    //   if(this.displayName)
    //   {
    //     this.displayName = false
    //   }else this.displayName = true
    // }
    // fireEvent() {
    //   this.childEvent.emit('Hey Angular Prepration ')
    // }

  
}
