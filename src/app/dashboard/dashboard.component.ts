import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BasicStorageService } from '../services/basic-storage.service';
import { EmployeeModel } from './dashboard.model'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  modalVisible: boolean;
  showAdd: boolean;
  showUpdate: boolean;
  employeeTable: any;
  employeeModelData: EmployeeModel = new EmployeeModel();
  constructor(private api: BasicStorageService) { }

  employeeForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    task: new FormControl(''),
    progress: new FormControl('')
  })

  ngOnInit(): void {
    this.getFromTable();
  }

  showModal() {
    this.modalVisible = true;
  }

  clickAddEmployee() {
    this.employeeForm.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  // testForm(employeeModelData: any) {
  //   console.log(employeeModelData);
  // }

  postToTable() {
    this.employeeModelData.firstName = this.employeeForm.value.firstName;
    this.employeeModelData.lastName = this.employeeForm.value.lastName;
    this.employeeModelData.email = this.employeeForm.value.email;
    this.employeeModelData.task = this.employeeForm.value.task;
    this.employeeModelData.progress = this.employeeForm.value.progress;

    this.api.postTable(this.employeeModelData).subscribe(res => {
      console.log(res);
      this.employeeForm.reset();
      this.getFromTable();
      this.modalVisible = false;
    })

  }

  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    
    this.employeeModelData.id = row.id;
    this.employeeForm.controls['firstName'].setValue(row.firstName);
    this.employeeForm.controls['lastName'].setValue(row.lastName);
    this.employeeForm.controls['email'].setValue(row.email);
    this.employeeForm.controls['task'].setValue(row.task);
    this.employeeForm.controls['progress'].setValue(row.progress);
  }

  updateTable() {
    this.employeeModelData.firstName = this.employeeForm.value.firstName;
    this.employeeModelData.lastName = this.employeeForm.value.lastName;
    this.employeeModelData.email = this.employeeForm.value.email;
    this.employeeModelData.task = this.employeeForm.value.task;
    this.employeeModelData.progress = this.employeeForm.value.progress;
    
    this.api.updateTable(this.employeeModelData, this.employeeModelData.id).subscribe(res => {
      this.employeeForm.reset();
      this.getFromTable();
      this.modalVisible = false;
    })
  }

  getFromTable() {
    this.api.getTable().subscribe(res => {
      this.employeeTable = res;
    })
  }

  detelFromTable(row: any) {
    this.api.deleteFromTable(row.id).subscribe(res => {
      this.getFromTable();
    })
  }

}
