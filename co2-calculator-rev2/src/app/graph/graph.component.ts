import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Get APIs output here
  outputData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];
}
