import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  dataArr = [
    {
      _id: '6396dc3cf32d70ed68675c75',
      age: 33,
      name: 'Eloise Garza',
      gender: 'female',
    },
    {
      _id: '6396dc3c55bf568a47cefee2',
      age: 36,
      name: 'Yolanda Guzman',
      gender: 'female',
    },
    {
      _id: '6396dc3c554add952f789676',
      age: 23,
      name: 'Petra Avery',
      gender: 'female',
    },
    {
      _id: '6396dc3cfecb3c0746fd7d1c',
      age: 33,
      name: 'Hawkins Dickson',
      gender: 'male',
    },
    {
      _id: '6396dc3caf94e276516da9af',
      age: 34,
      name: 'Blackwell Benton',
      gender: 'male',
    },
    {
      _id: '6396dc3cbb4a204703ca58aa',
      age: 31,
      name: 'Cherry Goodman',
      gender: 'female',
    },
    {
      _id: '6396dc3c2df57441e1e23a85',
      age: 35,
      name: 'Beasley Vaughan',
      gender: 'male',
    },
    {
      _id: '6396dc3c11f6dc94cfed7637',
      age: 31,
      name: 'Mcdonald Carroll',
      gender: 'male',
    },
    {
      _id: '6396dc3c8317b3ffb7db40cb',
      age: 20,
      name: 'Elena Wooten',
      gender: 'female',
    },
    {
      _id: '6396dc3c242174b9215203de',
      age: 28,
      name: 'Frost Burgess',
      gender: 'male',
    },
    {
      _id: '6396dc3c2755f25fdcb78100',
      age: 35,
      name: 'Gabriela Fischer',
      gender: 'female',
    },
    {
      _id: '6396dc3cca7ee97415aadebd',
      age: 21,
      name: 'Ewing Baker',
      gender: 'male',
    },
    {
      _id: '6396dc3c2da2b781501a4293',
      age: 40,
      name: 'Mullins Ball',
      gender: 'male',
    },
    {
      _id: '6396dc3ceac3ca5d48dbacb0',
      age: 35,
      name: 'Olivia Holloway',
      gender: 'female',
    },
    {
      _id: '6396dc3ca7844cefcd7d460d',
      age: 40,
      name: 'Sonya Romero',
      gender: 'female',
    },
    {
      _id: '6396dc3c95ba5aa82cddeb6d',
      age: 38,
      name: 'Landry Mason',
      gender: 'male',
    },
    {
      _id: '6396dc3cf5052c6d3e3cc04e',
      age: 25,
      name: 'Glenn Wilcox',
      gender: 'male',
    },
    {
      _id: '6396dc3cc9890f2806800418',
      age: 34,
      name: 'Odessa Daniel',
      gender: 'female',
    },
    {
      _id: '6396dc3c94d0d80b9472affd',
      age: 21,
      name: 'Juliette Walter',
      gender: 'female',
    },
    {
      _id: '6396dc3c11184a18d82af4e6',
      age: 25,
      name: 'Mccoy Vega',
      gender: 'male',
    },
  ];

  data!: any;
  data2!: any;
  data3!: any;

  ngOnInit(): void {
    const source = from(this.dataArr);

    source
      .pipe(
        filter((memb: any) => memb.name.length > 15),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });

    source
      .pipe(
        filter((memb: any) => memb.gender == 'female'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data2 = res;
      });

    source
      .pipe(
        filter((memb: any) => memb._id == '6396dc3ceac3ca5d48dbacb0'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data3 = res;
      });
  }
}
