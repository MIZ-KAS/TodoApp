import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

// @ViewChild('taskInput') input;
// base app template, first install ionic storage npm. use ionic storage provider. storage to firebass and ionic storage. use to provider variable inside the component.  

export class HomePage {
  taskName: any = [];
  taskList: any = [];
  input: any;

  constructor(public navCtrl: NavController, private alertController: AlertController) { }
  // constructor(public alertController: AlertController, navCtrl: NavController) {}



  // ionViewDidLoad(){
  //   setTimeout(() => {
  //     this.input.setFocus();
  //   },350);
  // }
  addTask() {
    if (this.taskName.length > 0) {
        let task = this.taskName;
        this.taskList.push(task);
        this.taskName = "";
        this.input.setFocus();
    }
}

deleteTask(index: any){
  this.taskList.splice(index, 1);
}

async updateTask(index: any) {
  const alert= await this.alertController.create({
      header: 'Update Task?',
      message: 'Type in your new task to update.',
      inputs: [{ name: 'editTask', placeholder: 'Task' }],
      buttons: [ { text: 'Cancel', role: 'cancel' }, { text: 'Update', handler: data => { this.taskList[index] = data.editTask; } }]     
    
  });
  await alert.present();
}

}

// const alert= await this.alertController.create({
//   header: 'Update Task?',
//   message: 'Type in your new task to update.',
//   inputs: [{ name: 'editTask', placeholder: 'Task' }],
//   buttons: [ { text: 'Cancel', role: 'cancel' }, { text: 'Update', handler: (index : any) => { this.taskList.get(this.taskList[index])} },      
// ]
// });





