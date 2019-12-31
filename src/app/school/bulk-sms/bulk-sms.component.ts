import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-bulk-sms',
  templateUrl: './bulk-sms.component.html',
  styleUrls: ['./bulk-sms.component.scss']
})
export class BulkSmsComponent implements OnInit {
  public columnDefs = [
    { headerName: 'Registration #', width: '250', field: 'registration', sortable: true, filter: true, checkboxSelection: true, headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true },
    { headerName: 'Student Name', width: '300', field: 'name', sortable: true, filter: true },
    { headerName: 'Roll Number', width: '250', field: 'roll', sortable: true, filter: true },
    { headerName: 'Mobile Number', width: '300', field: 'mobile', sortable: true, filter: true },
    { headerName: 'Status', width: '300', field: 'status', sortable: true, filter: true }
  ];
  public rowData = [
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, mobile: '898767654', status: 'Sent' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, mobile: '898767654', status: 'Sent' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, mobile: '898767654', status: 'Pendding' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, mobile: '898767654', status: 'Diliverd' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, mobile: '898767654', status: 'Failed' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, mobile: '898767654', status: 'Failed' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, mobile: '898767654', status: 'Send' },
    { name: 'John', registration: 'RG-009-02-2019', roll: 123456, mobile: '898767654', status: 'Pending' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
