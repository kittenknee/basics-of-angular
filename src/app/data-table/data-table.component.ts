import { Component } from '@angular/core';
import data from '../../assets/todo.json';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  container_title = "Data Table"
  datas = data;
  dataSending!: { userId: number; id: number; title: string; completed: boolean; };
  dataSent = false;

  sendData(index: string | any){
    console.log(this.datas[index]);
    this.dataSending = this.datas[index];
    console.table(this.dataSending);
    this.dataSent = true;
  }

  updated(title: string | any){
    this.datas.push(title.value);
  }

}
