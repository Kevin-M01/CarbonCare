import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

export interface Data {
  name: string,
  value: number
}

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  // Get APIs output here
  @Input() outputData: Data[] = [];

  constructor() { }

  ngOnInit(): void {
  }


}
