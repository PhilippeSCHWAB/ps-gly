import { Component, OnInit } from '@angular/core';
import {GlycemielistalimentService} from '../glycemielistaliment.service';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private glycemielistalimentService: GlycemielistalimentService) { }

  ngOnInit() {
  }

}
