import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tabdemo',
  templateUrl: './tabdemo.component.html',
  styleUrls: ['./tabdemo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabdemoComponent implements OnInit {
  tabs = [0, 1, 2];

  activeIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
