import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emp;
  constructor(public service:DataService) {
    this.GETDATA();
   }

  ngOnInit() {
  }

  GETDATA()
  {
    this.service.GETDATA().subscribe((data)=>{
      this.emp=data});
  }
}
