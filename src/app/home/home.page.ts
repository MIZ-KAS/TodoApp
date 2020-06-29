import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  taskName: any = [];
  taskList: any = [];

  constructor(public navCtrl: NavController, private alertController: AlertController) { }
  // constructor(public alertController: AlertController, navCtrl: NavController) {}

  addTask() {
    if (this.taskName.length > 0) {
        let task = this.taskName;
        this.taskList.push(task);
        this.taskName = "";
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
      buttons: [ { text: 'Cancel', role: 'cancel' }, { text: 'Update', handler: (index : any) => { this.taskList.get(this.taskList[index])} },      
    ]
  });
  await alert.present();
}

}



