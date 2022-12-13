import { Component } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.scss']
})
export class AsyncAwaitComponent {
  constructor() { }

  promise = new Promise ((resolve , reject) =>{
    setTimeout(() => {
      resolve("Data Received");
    }, 3000);
  })

  ngOnInit(){
    // console.log(this.getData());
    // this.getData().then(console.log)
    this.getData()
  }

  //async keyword with function always returns promise.
  // async getData(){
  //   return 'Data Received'
  // }

  async getData(){
    let response = await this.promise
    console.log(response)
  }
}
