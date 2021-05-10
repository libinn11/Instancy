import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { Data } from '../model/data';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[DatePipe]
})
export class HomeComponent implements OnInit {
  public data: Array<Data> | null = null;
  public isListView:boolean=false;
  public currentDate:string | null=new Date().toDateString();

  constructor(private dataService: DataService,private datePipe: DatePipe) {
    this.currentDate = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
   }

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.dataService.getData().subscribe((x: Array<Data>) => {
      this.data = x;
    });
  }
}
