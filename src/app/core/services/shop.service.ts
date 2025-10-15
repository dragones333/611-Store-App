import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Store } from '../models/store.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(
    private httpClient: HttpClient
  ){}
  
  //RXJS
  getAllStore(){
    console.log("Trayendome las tiendas")
    const result = this.httpClient.get<Store[]>(`${environment.API_URL}/Store`);
    return result;
  }
}
