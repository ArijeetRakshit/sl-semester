import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-create',
  templateUrl: './feedback-create.component.html',
  styleUrls: ['./feedback-create.component.css']
})
export class FeedbackCreateComponent implements OnInit {

  teacher_name:string
  subknow:string
  quainst:string
  creativity:string
  approach:string

  constructor(private feedbackService:FeedbackService) {
    this.teacher_name='';
    this.subknow='1';
    this.quainst='1';
    this.creativity='1';
    this.approach='1';
  }

  ngOnInit(): void {
  }

  onSubmit(){
    let score=Number(Number(this.subknow)+Number(this.quainst)+Number(this.creativity)+Number(this.approach));
    console.log(score);
    this.feedbackService.submit(this.teacher_name,score);
    this.teacher_name='';
    this.subknow='1';
    this.quainst='1';
    this.creativity='1';
    this.approach='1';
  }
}
