import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  title = 'Tracker';
  store: any;

  constructor(private afd: AngularFireDatabase) {
  }

  ngOnInit(): void {
    this.store = this.afd.object('/store').valueChanges();
  }
}
