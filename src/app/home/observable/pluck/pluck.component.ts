import { Component, OnInit } from '@angular/core';
import { from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss'],
})
export class PluckComponent implements OnInit {
  data: any;
  data2: any;
  users = [
    {
      name: 'Arpit',
      skills: 'Angular',
      job: { title: 'fornt End Develope', exp: '10 Years' },
    },
    {
      name: 'Harshit',
      skills: 'Html , Css',
      job: { title: 'Html Developer', exp: '10 Years' },
    },
    {
      name: 'Ayush',
      skills: 'JavaScript',
      job: { title: 'JavaScript Developer', exp: '10 Years' },
    },
    {
      name: 'Shivam',
      skills: 'TypeScript',
      job: { title: 'Programmer', exp: '10 Years' },
    },
  ];

  ngOnInit() {
    from(this.users)
      .pipe(pluck('name'), toArray())
      .subscribe((res) => {
        this.data = res;
        console.log(res);
      });

    from(this.users)
      .pipe(pluck('job', 'title'), toArray())
      .subscribe((res) => {
        this.data2 = res;
        console.log(res);
      });
  }
}
