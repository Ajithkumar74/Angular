import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  title: string = 'Angular Shadow Batch';

  changeTitle() {
    this.title = 'Details Changed';
    
  }

}
