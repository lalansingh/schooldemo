import { Component, OnInit } from '@angular/core';
import { ActionComponent } from './child/action.component';
import { Module } from 'ag-grid-community';
// import 'ag-grid-community/dist/styles/ag-grid.css'
// import 'ag-grid-community/dist/styles/ag-theme-balham.css';

// import * as agGrid from 'ag-grid-community';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  public columnDefs = [
    { headerName: 'Student Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Registration #', field: 'registration', sortable: true, filter: true },
    { headerName: 'Roll Number', field: 'roll', sortable: true, filter: true },
    { headerName: 'Admission Date', field: 'admission', sortable: true, filter: true },
    { headerName: 'Father Name', field: 'father', sortable: true, filter: true },
    { headerName: 'Mobile Number', field: 'mobile', sortable: true, filter: true },
    { headerName: 'Email ID', field: 'email', sortable: true, filter: true },
    { headerName: 'Status', field: 'status', sortable: true, filter: true },
    { headerName: 'Action', field: 'action', sortable: true, filter: true, cellRenderer: "actionRenderer" },
  ];
  public rowData = [
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Suspended' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Inactive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Suspended' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Transfered' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'On Leave' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Suspended' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Inactive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Suspended' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Transfered' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'On Leave' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Suspended' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Inactive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Suspended' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Transfered' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'On Leave' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, admission: 'March 02, 2016', father: 'Jenni', mobile: '898767654', email: 'xyz@gmail.com', status: 'Acive' },

  ];

  // let the grid know which columns and what data to use
  public gridOptions = {
    columnDefs: this.columnDefs,
    rowData: this.rowData
  };
  public frameworkComponents;

  constructor() {
    this.frameworkComponents = {
      actionRenderer: ActionComponent
    };
  }

  ngOnInit() {
    // let eGridDiv: any = document.querySelector('#myGrid');

    // new agGrid.Grid(eGridDiv, this.gridOptions);
  }

}
