import { Component, OnInit } from '@angular/core';
import {  AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseOperation } from 'angularfire2/database/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  taskInput = 'write here';
  tasks: AngularFireList<any>;
  taskList: any[] = [];

  constructor(private datastore: AngularFireDatabase) {
  }

  ngOnInit() {
    this.tasks = this.datastore.list('/tasks', ref => ref.orderByChild('id'));
    this.tasks.valueChanges().subscribe(taskList => {
      this.taskList = taskList;
      console.log(taskList);
    });
  }

  onSubmit() {
    if (this.verifyInput()) {
      const date = new Date();
      const id = date.getTime();
      this.tasks.update(date.toDateString(), {
        id: id,
        value: this.taskInput
      });
    }
  }

  verifyInput(): boolean {
    return this.taskInput && this.taskInput.length > 5;
  }

}
