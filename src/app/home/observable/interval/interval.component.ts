import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit{

  obsMsg :any;
  videoSubscription!: Subscription;
  ngOnInit(): void {
    const boradCastVideos = timer(5000 , 1000)

    this.videoSubscription = boradCastVideos.subscribe(res =>{
      console.log(res);
      this.obsMsg = "video " + (res + 1) ;

      this.print(this.obsMsg , "elContainer")
      if(res == 4){
        this.videoSubscription.unsubscribe()
      }
    })
  }

  print(countVal :any , elemantId:any){
    let el = document.createElement("li");
    el.innerText = countVal;
    document.getElementById(elemantId)?.appendChild(el)
 }
}
