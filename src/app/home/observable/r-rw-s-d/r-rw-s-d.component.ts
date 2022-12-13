import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-r-rw-s-d',
  templateUrl: './r-rw-s-d.component.html',
  styleUrls: ['./r-rw-s-d.component.scss'],
})
export class RRwSDComponent implements OnInit {
  data!: Object;
  fetching: boolean = false;
  status: string = 'No Data';

  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  fetchDetails() {
    this.fetching = true;
    this.status = 'Fetching Data .....';
    this.http
      .get('https://dummyjson.com/products/1')
      .pipe(
        // retry(4)
        retryWhen((err) =>
          err.pipe(
            delay(3000),
            scan((retryCount :any) => {
              if (retryCount >= 5) {
                throw err;
              } else {
                retryCount = retryCount + 1;
                parseInt(retryCount)
                this.status = 'Retrying Attempt #' + retryCount;
                return retryCount;
              }
            },0)
          )
        )
      )
      .subscribe(
        (res: any) => {
          this.data = res;
          this.status = 'Data Fetched';
          this.fetching = false;
        },
        (err: any) => {
          this.status = 'Problem to fetch data';
          console.log(err);

          this.fetching = false;
        }
      );
  }
}
