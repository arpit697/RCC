import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent {
  constructor() {}
  val: any;

  ngOnInit(): void {
    // let buyLaptop = new Promise(function(resolve , reject){
    //   resolve("promise resolved")
    // });

    let buyLaptop = new Promise((resolve, reject) => {
      // reject('promise is reject');
      // resolve('promise is resolved');

      if (this.DellAvailable()) {
        return setTimeout(() => {
          resolve('Dell is Purchased');
        }, 3000);
      } else if (this.HpAvailable()) {
        return setTimeout(() => {
          resolve('Hp is Purchased');
        }, 3000);
      } else {
        return setTimeout(() => {
          reject('Laptop is not available');
        }, 3000);
      }
    });

    buyLaptop
      .then((res) => {
        console.log('then code =>', res);
        this.val = res;
      })
      .catch((res) => {
        console.log('catch code =>', res);
        this.val = res;
      });
  }

  DellAvailable() {
    return false;
  }

  HpAvailable() {
    return false;
  }

}
