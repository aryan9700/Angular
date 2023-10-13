import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
@Input('person') person: any;

@Output('personClicked') personClicked=new EventEmitter();

getTextSize(person:any){
  if (person.country=="IN") {
    return '24px';
  }
  else if (person.country=="UK") {
    return '34px';
  }
  else if (person.country=="US") {
    return '40px';
  }
  else return '20px';
}
onClick(){
  this.personClicked.emit();
}

  ngOnInit(): void {
    console.log(this.person);
  }

}
