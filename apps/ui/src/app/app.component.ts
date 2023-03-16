import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './core/data.service';

@Component({
  selector: 'empty-nx-web-api-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  data: Observable<unknown>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data = this.dataService.loadData();
  }

}
