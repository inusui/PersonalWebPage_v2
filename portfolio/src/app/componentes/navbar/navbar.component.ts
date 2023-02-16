import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor() { }
  box = false;
  ngOnInit(): void {

  }

  test(){
    this.box = !this.box;
    console.log(this.box)
  }

}
