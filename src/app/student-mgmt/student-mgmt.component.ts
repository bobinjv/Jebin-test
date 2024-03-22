import { Component } from '@angular/core';
import { StudentService } from '../service/student.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {
  MatDialog
} from '@angular/material/dialog';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';

@Component({
  selector: 'app-student-mgmt',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './student-mgmt.component.html',
  styleUrl: './student-mgmt.component.css'
})
export class StudentMgmtComponent {

  displayedColumns: string[] = ['fName', 'lName','addr', 'num',  'mail', 'edit'];
  dataSource = new MatTableDataSource<any>;;

  constructor(
    private studentService: StudentService,
    public dialog: MatDialog
  ){
    this.getStudentList();
  }

  private getStudentList(){
    this.studentService.getStudentList().subscribe((res:any)=>{
      this.dataSource = new MatTableDataSource(res);
    })
  }

  public openAddStudentPopup(){
    const dialogRef = this.dialog.open(AddEditStudentComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.addNewStudent(result);
    });
  }

  public addNewStudent(formData:any){
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      address: formData.address,
      dob: formData.dob.toDateString(),
      phoneNumber: formData.phoneNumber,
    }
    this.studentService.addNewStudent(data).subscribe((res:any)=>{
      this.getStudentList();
    })
  }

  public openEditStudentPopup(studentData:any){
    console.log(studentData);
    const dialogRef = this.dialog.open(AddEditStudentComponent, {
      data: studentData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.editStudent(result, studentData._id);
    });
  }

  public editStudent(formData:any, id:any){
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      address: formData.address,
      dob: new Date(formData.dob).toDateString(),
      phoneNumber: formData.phoneNumber,
    }
    this.studentService.editStudent(data, id).subscribe((res:any)=>{
      this.getStudentList();
    })
  }
}
