import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  showGoogleButton: boolean = false;
  name: string = "Internshala";
  disabledMyButton: boolean = false;
  google: string = 'https://www.google.com';
  // logo: string = '../assets/Angular.png';
  // imageWidth: number = 500;
  // imageHeight: number = 500;
  // fruits: string[] = [];
  people: any[] = [{
    "name": "bob",
    "country": "AU",
    "age": 24
  },
  {
    "name": "marly",
    "country": "US",
    "age": 26
  },
  {
    "name": "shawn",
    "country": "UK",
    "age": 21
  },
  {
    "name": "mendis",
    "country": "IN",
    "age": 23
  },
  {
    "name": "Chain",
    "country": "NP",
    "age": 23
  }
  ]


  constructor() {
    // this.fruits.push("Apple");
    // this.fruits.push("Orange")
    // this.fruits.push("Pineapple")
    // this.fruits.push("Mango")
    // this.fruits.push("Banana")
    // console.log(this.fruits);
  }
  onPersonClicked(){
  console.log("Person was clicked from menu");
  }

  toogleGoogleButton() {
    this.showGoogleButton = !this.showGoogleButton;
  }
  shouldDisplay() {
    if (this.name == "Internshala") {
      return true;
    } else {
      return false;
    }
  }
  sayHello() {
    alert('hello');
  }
  log(evr: any) {
    console.log(evr.target.value);
  }
  keyDown(event: any) {
    if (event.key === "Enter")
      console.log(event);
  }

  ngOnInit() { }
}
