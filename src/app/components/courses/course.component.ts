import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {
  courses = [
    { name: 'Course A', hours: 25, type: 'frontal', startDate: new Date('2024-03-10'),  lecturerName: 'gal oren' },
    { name: 'Course B', hours: 45, type: 'laboratory', startDate: new Date('2022-04-05'), lecturerName: 'yaniv madar' },
    { name: 'Course C', hours: 70, type: 'computerized', startDate: new Date('2024-03-30'), lecturerName: 'noam choen' }
  ]

  registerCourse() {
    alert("Registration completed successfully");
  }

  today: Date = new Date();
  nextMonth: Date = new Date(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate())
  nextWeek: Date = new Date(this.today.getTime() + 7 * 24 * 60 * 60 * 1000);

}
