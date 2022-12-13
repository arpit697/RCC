import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss'],
})
export class CustomObservableComponent implements OnInit, OnDestroy {
  techStatus: any;
  techStatus2 :any
  subs2!: Subscription;
  name :any;
  ngOnInit(): void {
    //observer is a code which create observabel
    const cusObs1 = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next('Data Emit 1');
      }, 1000);
      setTimeout(() => {
        observer.next('Data Emit 2');
      }, 2000);
      setTimeout(() => {
        observer.next('Data Emit 3');
        observer.error(new Error('Limit Exceed'));
      }, 3000);
      setTimeout(() => {
        observer.next('Data Emit 4');
        observer.complete();
      }, 4000);
      // observer.error()
      // observer.complete()
    });

    cusObs1.subscribe(
      (res: any) => {
        this.print(res, 'elContainer');
      },
      (err: any) => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'completed';
      }
    );

    //example 2 


    const cusObs2 = Observable.create((observer: any) => {
      let count = 1;
      let arr2 = ["Angular" , "Javascript" , "Html" , "Css" , "TypeScript"];
      setInterval(() => {
        observer.next(arr2[count]);
        if (count >= 3) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    this.subs2 = cusObs2.subscribe((res: any) => {
      this.print(res , "elContainer2")
    },
    (err: any) => {
      this.techStatus2 = 'error';
    },
    () => {
      this.techStatus2 = 'completed';
    });


    //example 3 

    const cusObs3 = Observable.create((observer:any) =>{
      let count = 1;
      let arr2 = ["Shalini" , "Arpit" , "Gargi" , "Sarthak" , "Taddy"];
      setInterval(() => {
        observer.next(arr2[count]);
        if (count >= 3) {
          observer.complete();
        }
        count++;
      }, 2000);
    })

    cusObs3.subscribe((res: any) => {
     this.name = res;
      
      // this.print(res , "elContainer2")
    },
    (err: any) => {
      this.techStatus2 = 'error';
    },
    () => {
      this.techStatus2 = 'completed';
    });
  }

  print(countVal: any, elemantId: any) {
    let el = document.createElement('li');
    el.innerText = countVal;
    document.getElementById(elemantId)?.appendChild(el);
  }

  ngOnDestroy(): void {
    this.subs2.unsubscribe();
  }
}
