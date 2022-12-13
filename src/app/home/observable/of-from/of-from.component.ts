import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss'],
})
export class OfFromComponent implements OnInit {
  obsMsg: any;
  ngOnInit(): void {
    const Obs1 = of('Shalini', 'Arpit', 'Gargi', 'Yathatha');
    Obs1.subscribe((res) => {
      this.print(res, 'elContainer1');
    });

    const Obs2 = of({ a: 'Shalini', b: 'Arpit', c: 'Gargi', d: 'Yathatha' });
    Obs2.subscribe((res) => {
      this.obsMsg = res;
    });

    const Obs3 =  from(['Shalini' , 'Arpit' , 'Gargi' , 'Yathartha']);
    Obs3.subscribe((res) => {
      console.log(res)
      this.print(res, 'elContainer2');
    });

    const promise =  new Promise(resolve =>{
      setTimeout(() => {
        resolve(`promise resolved`);
      }, 3000);
    })

    const Obs4 =  from(promise);
    Obs4.subscribe((res) => {
      console.log(res);
      this.print(res, 'elContainer3');
    });

    const Obs5 =  from("SHALINI");
    Obs5.subscribe((res) => {
      console.log(res);
      this.print(res, 'elContainer4');
    });
  }

  print(countVal: any, elemantId: any) {
    let el = document.createElement('li');
    el.innerText = countVal;
    document.getElementById(elemantId)?.appendChild(el);
  }
}


