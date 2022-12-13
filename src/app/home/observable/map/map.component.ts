import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  sub1!: Subscription;
  msg1:any

  sub2!: Subscription;
  msg2:any
  ngOnInit(): void {
    //example 1

    const boradCastVideos = interval(1000);
    this.sub1 = boradCastVideos
    .pipe(
      map(data => "video " + data)
    )
    .subscribe((res) => {
      this.msg1 = res ;
    });

    setTimeout(() => {
      this.sub1.unsubscribe()
    }, 10000);


    //example 2 

    this.sub2 = boradCastVideos.pipe(map(data => (data * 3))).subscribe(res =>{
      this.msg2 = res;
    })

    setTimeout(() => {
      this.sub2.unsubscribe()
    }, 10000);

  }

}
