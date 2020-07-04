
import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from './app.service'
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading = false;
  path = "";


  onFileChanged(event) {
  }

  constructor(public appService: AppService, private http: HttpClient, private el: ElementRef) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    form.value['path'] = this.path;
    if (form.invalid) return;
    console.log(form.value);
    this.isLoading = true;
    this.appService.createUser(form.value);
  }

  upload() {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) {
      formData.append('photo', inputEl.files.item(0));
      this.http
        .post('http://localhost:3001/api/user/uploadPhoto', formData).subscribe(res => {
          console.log(res['path']);
          this.path = res['path'];
        });
    }
  }

}
