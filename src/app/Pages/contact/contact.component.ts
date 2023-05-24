import { Component, OnInit } from '@angular/core';
import { coninf } from './coninf';
import { HttpClient } from '@angular/common/http';
import { map, pipe } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


allcontacts : coninf[]=[];
Name:String="Prsad";
showForm: any=1;

  constructor(private http : HttpClient){};

  // ngOnInit(){this.fetchContact();}

  contact(coninf : {Name : string, Mobile : string, Model :string})
{
   console.log(coninf);
   this.http.post<{name : string}>("https://angularproject-281b9-default-rtdb.firebaseio.com/coninf.json",coninf)
   .subscribe((res)=>
   {
     console.log(res);
   });
}

submitForm() {
  this.showForm=0;
  }

}
