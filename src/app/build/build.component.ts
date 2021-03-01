import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.styl']
})
export class BuildComponent implements OnInit {

  layers: number[] = [];

  constructor() {
    for (let i=0; i<10; i++) {
      this.layers.push(i);
    }
  }

  ngOnInit(): void {
  }

}
