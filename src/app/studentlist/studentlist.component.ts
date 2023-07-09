import { Component , OnInit} from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit{

  public batches : any = [];

  constructor(private StudentService: StudentService)
  {
    
  }

  ngOnInit(): void 
  {
    this.batches = this.StudentService.GetBatchDetails();    
  }



}
