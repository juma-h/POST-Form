import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'post-form';
  invoiceForm :FormGroup;

  ngOnInit() {
    this.invoiceForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    });
  }

}




interface Item {
  item: string;
  quantity: number;
  price:number;
  amount:number;
}

interface Address {
  name: string;
  address:number;
  phone: number;
  email: string;
}
interface Invoice{
  invoiceNumber:string;
  invoiceDate:string;
  paymentDue:string;
}
