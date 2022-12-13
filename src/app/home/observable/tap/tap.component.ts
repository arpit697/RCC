import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
  myColor!:string;
  ngOnInit(): void {
    const arr = ['Arpit', 'Ayush', 'Shivam', 'Swapnil'];
    const colArr = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple' ,'Voilet', 'Black'];
    const source = interval(2000);
    let obsSub!: Subscription;
    let obsSub2!: Subscription;


    obsSub = source
      .pipe(
        tap((res) => {
          if (res == 4) {
            obsSub.unsubscribe();
          }
        }),
        map((res) => arr[res])
      )
      .subscribe((res) => {
        this.print(res, 'elContainer');
      });

      obsSub2 = source
      .pipe(
        tap((res) => {
          this.myColor = colArr[res];
          if (res == 8) {
            obsSub2.unsubscribe();
          }
        }),
        map((res) => colArr[res])
      )
      .subscribe((res) => {
       
        this.print(res, 'elContainer2');
      });
  }

  print(countVal: any, elemantId: any) {
    let el = document.createElement('li');
    el.innerText = countVal;
    document.getElementById(elemantId)?.appendChild(el);
  }
}
