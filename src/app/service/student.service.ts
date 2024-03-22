import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../env/env';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private _http:HttpClient
  ) { }

  public getStudentList(){
    return this._http.get(environment.apiUrl+'/student/get')
  }

  public addNewStudent(data: any){
    return this._http.post(environment.apiUrl+'/student/register', data)
  }

  public editStudent(data: any, id:any){
    return this._http.patch(environment.apiUrl+'/student/patch/'+id, data)
  }
}
