import { Component, OnInit } from '@angular/core';
import { from, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-take-tl-tu-ta-timer',
  templateUrl: './take-tl-tu-ta-timer.component.html',
  styleUrls: ['./take-tl-tu-ta-timer.component.scss']
})
export class TakeTlTuTaTimerComponent implements OnInit{
  arr = ['Arpit', 'Ayush', 'Shivam', 'Swapnil'];

  ngOnInit(): void {
    const nameSource = from(this.arr)
    nameSource.pipe(take(3)).subscribe(res =>{
      this.print(res , 'elContainer')
    })

    
    nameSource.pipe(takeLast(2)).subscribe(res =>{
      this.print(res , 'elContainer2')
    })


    const source =  interval(500)
    let conditionOne = timer(5000)
    source.pipe(map(res => "Number " + ' ' + res), takeUntil(conditionOne)).subscribe(res =>{
      this.print(res , 'elContainer3')
    })
  }

  print(countVal: any, elemantId: any) {
    let el = document.createElement('li');
    el.innerText = countVal;
    document.getElementById(elemantId)?.appendChild(el);
  }
}
