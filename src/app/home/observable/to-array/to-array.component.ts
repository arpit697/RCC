import { Component, OnInit } from '@angular/core';
import { from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss'],
})
export class ToArrayComponent implements OnInit {
  sourceSub: any;

  users = [
    { name: 'Arpit', skills: 'Angular' },
    { name: 'Harshit', skills: 'Html , Css' },
    { name: 'Ayush', skills: 'JavaScript' },
    { name: 'Shivam', skills: 'TypeScript' },
  ];

  ngOnInit(): void {
    const source = interval(1000);

    this.sourceSub = source.pipe(take(5), toArray()).subscribe((res) => {
      console.log(res);
    });

    const source2 = from(this.users);
    source2.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });

    const source3 = of('Shalini', 'Arpit', 'Gargi', 'Yathartha');
    source3.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });
  }
}
