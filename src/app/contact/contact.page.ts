import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async Alert() {
    const alert = await this.alertCtrl.create({
      header: 'Seafood Hut',
      subHeader: 'Feed Back',
      message: 'Thank you for your Feedback',
      buttons: ['Close'],
    });

    await alert.present();
  }

}
