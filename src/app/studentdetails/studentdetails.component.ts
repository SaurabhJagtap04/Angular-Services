import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit{

  public batches : any = [];

  constructor(private StudentService: StudentService)
  {

  }

  ngOnInit(): void 
  {
    this.batches = this.StudentService.GetBatchDetails();    
  }

}
