import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule, } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-student',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatDatepickerModule, MatNativeDateModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-edit-student.component.html',
  styleUrl: './add-edit-student.component.css'
})
export class AddEditStudentComponent {

  public title = "Add Student";
  public regForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
  })

  constructor(
    public dialogRef: MatDialogRef<AddEditStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    if(data){
      this.editMode();
    }
  }

  public submitForm(){
    this.dialogRef.close(this.regForm.value)
  }

  private editMode(){
    this.title = "Edit Student";
    this.regForm.patchValue({
      firstName: this.data.firstName,
      lastName: this.data.lastName,
      email: this.data.email,
      address: this.data.address,
      dob: this.data.dob,
      phoneNumber: this.data.phoneNumber,
    })
  }
}
