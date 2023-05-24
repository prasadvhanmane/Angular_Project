import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products=[
    {id:101, name:'watch 1',price:'1000',color:'black',available:'Available',image:'/assets/w1.jpg'},
    {id:102, name:'watch 2',price:'2000',color:'black',available:'Available',image:'/assets/w2.jpg'},
    {id:103, name:'watch 3',price:'3000',color:'black',available:'Unavailable',image:'/assets/w3.jpg'},
    {id:104, name:'watch 4',price:'4000',color:'black',available:'Available',image:'/assets/w4.jpg'},
    {id:105, name:'watch 5',price:'5000',color:'black',available:'Unavailable',image:'/assets/w5.jpg'}
  ];

  count = 1;

}
