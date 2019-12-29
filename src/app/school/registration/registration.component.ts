import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public mode = '';
  public isViewMode = false;
  public student: any = studentModel;
  public title = 'REGISTRATION FORM';
  constructor(private route: ActivatedRoute) {

    this.mode = this.route.snapshot.params.mode ? this.route.snapshot.params.mode : 'create';
    if (this.mode === 'view') {
      this.isViewMode = true;
      this.title = 'Student Details';
      this.loadData();
    }

    if (this.mode === 'edit') {
      this.isViewMode = true;
      this.title = 'Update Student Details';
      this.loadData();
    }

  }

  ngOnInit() {
  }

  private loadData() {
    this.student = {
      registratonno: '777673467',
      fname: 'Rakesh',
      mname: '',
      lname: 'kumar',
      dob: '02/03/2019',
      father: 'Ramesh',
      mother: 'shakshi',
      mobile: '232323234',
      email: 'abc@gmail.com',
      address: {
        hn: '#34',
        street: '2nd main third cross',
        landmark: 'near to abc',
        postoffice: 'kumraow',
        district: 'Bhl',
        state: 'Bihar',
        country: 'india',
        zip: '845676'
      }
    }
  }
}

export const studentModel = {
  registratonno: '',
  fname: '',
  mname: '',
  lname: '',
  dob: '',
  father: '',
  mother: '',
  mobile: '',
  email: '',
  address: {
    hn: '',
    street: '',
    landmark: '',
    postoffice: '',
    district: '',
    state: '',
    country: '',
    zip: ''
  }
}
