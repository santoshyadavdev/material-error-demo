import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansiondemo',
  templateUrl: './expansiondemo.component.html',
  styleUrls: ['./expansiondemo.component.css']
})
export class ExpansiondemoComponent implements OnInit {

  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
