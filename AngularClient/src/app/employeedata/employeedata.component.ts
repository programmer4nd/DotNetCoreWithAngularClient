
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'; 
import { EmployeesService } from './../services/employees.service';
export interface IEmployee {
  name: string;
  id: number;
  jobTitle: string;
  department: string;
  email: string;
}
@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrl: './employeedata.component.css'
})
export class EmployeedataComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email','jobTitle'];
  dataSource = new MatTableDataSource<any>();

  constructor(private dataService: EmployeesService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.getEmployees().subscribe(data => {
      this.dataSource.data = data.map(item => {
        return {
          ...item,
          form: {
            id: item.id, 
            email: item.email,
            jobTitle: item.jobTitle
          }
        };
      });
    });
  }
   
  updateForm(row: any, field: string): void { 
    row[field] = row.form[field]; 
  }
}
