import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-order-detail.component',
  standalone:false,
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.scss'
})
export class OrderDetailComponent implements OnInit{
  id?: string | null;
  constructor(
    private route: ActivatedRoute
  ){}
    ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get("id");
    console.log(this.id);
  }
}
