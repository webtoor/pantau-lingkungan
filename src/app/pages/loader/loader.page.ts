import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  toHome(){
    /* this.router.navigate(['/home', { skipLocationChange: false, replaceUrl: true }]); */
    this.router.navigate(['/home'], {replaceUrl: true });
  }

}
