import { Component, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.scss']
})
export class FormEventComponent {
  @ViewChild('addBtn') addBtn: any;

  ngAfterViewInit(){
    let count = 1;
    fromEvent(this.addBtn.nativeElement , 'click').subscribe(res =>{
      console.log(res);
      let countVal = 'Video' + count++
      this.print(countVal , "elContainer");
    })
  }
  
  print(countVal :any , elemantId:any){
     let el = document.createElement("li");
     el.innerText = countVal;
     document.getElementById(elemantId)?.appendChild(el)
  }
}
