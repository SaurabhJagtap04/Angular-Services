import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

 GetBatchDetails()
  {
    return [
      {"Name":"Prasad Deshmukh", "RollNo":501, "DOB":"December 28, 1999"},
      {"Name":"Sneha Jadhav", "RollNo":502, "DOB":"September 3, 1997"},
      {"Name":"Vikrant Mahajan", "RollNo":503, "DOB":"May 12, 1998"},
      {"Name":"Kalyani Patil", "RollNo":505, "DOB":"July 17, 1998"},
          ];
  }
}
