import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { ShopService } from '../../core/services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  standalone:false,
})
export class ShopComponent implements OnInit {
  
  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  markers: mapboxgl.Marker[]=[];
//backtip
constructor(private shopService:ShopService){}

  ngOnInit(): void {
    console.log("Iniciando componente");
    this.shopService.getAllStore().subscribe((Response)=>{
      console.log(Response);
    });
    console.log(`El token de mapbox vien de: ${environment.MAPBOX_TOKEN}`)
    this.map=new mapboxgl.Map({
      accessToken:"pk.eyJ1IjoianVhbmZyOTciLCJhIjoiY2x4cnhqZGZpMWUzdTJrb2Qxd2k5Z3huYSJ9.Kp99lB1snn3xzzi26jKy4w",
      style: this.style,
      container: "map",
      center: [-101.684168,21.121626],
      zoom: 15
    });

    this.shopService.getAllStore().subscribe((storeResponse)=>{
      console.log(storeResponse);
      storeResponse.forEach((store)=>{
        const marker=new mapboxgl.Marker()
        .setLngLat([store.longitude,store.latitude])
        .addTo(this.map);
      this.markers.push(marker);
      });
  });
}}
