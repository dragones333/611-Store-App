import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../core/services/order.service';
import { Order } from '../../core/models/order.model';


@Component({
  selector: 'app-orders.component',
  templateUrl: './orders.component.html',
  standalone:false,
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit{
constructor(private orderService: OrderService){}

//peticiones son asincronas
//ASYNC-AWAIT
//Observable RXJS
orders: Order[]=[];

  ngOnInit(): void {
    console.log("Iniciando componente")
    this.orderService.getAllOrders().subscribe(res=>{
      this.orders=res;
    
    });
    console.log("Fin del componente")
  }

  showModal(){
    console.log("Order:Order")
  }
}
