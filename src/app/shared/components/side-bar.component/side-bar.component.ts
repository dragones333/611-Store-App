import { Component, OnInit } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {NzMessageService} from 'ng-zorro-antd/message';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PagesModule } from "../../../pages/pages-module";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [NzMenuModule, NzIconModule, PagesModule, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  providers : [NzMessageService]
})
export class SideBarComponent implements OnInit {
  constructor(private msg : NzMessageService){}
  ngOnInit(): void {
    
  }

}
