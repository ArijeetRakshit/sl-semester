import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class FeedbackService {
    feedback=[]
    feedbackUpdated = new Subject();

    constructor(private http: HttpClient) { }

    submit(teacher_name:string,score:Number){
        const feedbackItem = {
            teacher_name:teacher_name,
            score:score
        }
        this.http.post<any>("http://localhost:3000/feedback",feedbackItem)
            .subscribe(data => {
                this.feedback.push(data);
                this.feedbackUpdated.next([...this.feedback])
                console.log(data);
            })
    }
}