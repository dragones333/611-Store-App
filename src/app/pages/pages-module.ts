import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component/shop.component';
import { ShopService } from '../core/services/shop.service';
import { InvoicesComponent } from './invoices.component/invoices.component';
import { ProductsComponent } from './products.component/products.component';
import { OrdersComponent } from './orders.component/orders.component';
import { AdminLayout } from './admin-layout/admin-layout';
import { RouterModule } from '@angular/router';
import { ADMIN_ROUTES } from './pages.route';
import { OrderService } from '../core/services/order.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { OrderDetailComponent } from './order-detail.component/order-detail.component'; 
import { NzTagModule } from 'ng-zorro-antd/tag'; 


@NgModule({
  declarations: [
    ShopComponent,
    ProductsComponent,
    InvoicesComponent,
    OrdersComponent,
    AdminLayout,
    OrderDetailComponent 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ADMIN_ROUTES),
    NzTableModule,
    NzIconModule,
    NzButtonModule,
    NzCardModule, 
    NzTagModule,
  ],
  providers:[
    ShopService,
    OrderService
  ],

  exports:[
    ShopComponent,
    ProductsComponent,
    InvoicesComponent,
    OrdersComponent,
    AdminLayout,
    RouterModule,
    OrderDetailComponent
  ]
})
export class PagesModule { }

/*
1- ver la respuesta de la API
2- crear los modelos
3-crear el servicio (crear metodos y peticiones a traves del httpclient)
4-agregar el servicio al modulo 00000000 al Stanalone COmponent
5- ytilizar el servicio en el componente

*/