import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Contacts, ContactFieldType } from "@ionic-native/contacts";
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contactNames: ContactFieldType[] = ["displayName"];
  contactsFound = [];

  constructor(public navCtrl: NavController, 
              private contacts: Contacts, 
              public callNumber: CallNumber, 
              public alertCtrl: AlertController, 
              public emailCtrl: EmailComposer) {
    this.searchContacts();
  }

  searchContacts(){
    this.contacts.find(this.contactNames).then(contacts => {
      this.contactsFound = contacts;
    })
  }


  callToNumber(userNumbers){
    let numbers = []
    let inputTypes = []
    
    userNumbers.forEach(element => {
      numbers.push(element.value)
    })

    numbers.forEach(element => {
      inputTypes.push({
        type:'radio',
        label: element,
        value: element
      })
    })

    let alert = this.alertCtrl.create({
      title: 'Números',
      message: 'Escolha um número para ligar:',
      inputs : inputTypes,
      buttons : [
        {
          text: "Cancelar"
        },
        {
          text: "Ligar",
          handler: data => {
            this.callNumber.callNumber(data, true)
              .then(res => console.log('Launched dialer!', res))
              .catch(err => console.log('Error launching dialer', err));
          }
        }
      ]
    })
    alert.present();
  }

  sendMail(user){

    if (user.emails) {
      let alert = this.alertCtrl.create({
        title: 'Preencha os campos:',
        inputs: [
          {
            placeholder: 'Assunto'
          },
          {
            placeholder: 'Mensagem'
          }
        ],
        buttons: [
          {
            text: 'Cancelar'
          },
          {
            text: 'Enviar',
            role: 'send',
            handler: data => {
                this.emailCtrl.open({
                  to: this.getEmails(user.emails),
                  subject: data[0],
                  body: data[1],
                  isHtml: true
                });
            }
          }
        ]
      });
      alert.present()
    } else {
      this.showAlert('Este usuario não possui email')
    }
  }

  getEmails(emails) {
    let resultedEmails = []
    emails.forEach(element => {
      resultedEmails = element.value
    })
    return resultedEmails
  }

  showAlert(mensagem) {
    let alert = this.alertCtrl.create({
      title: 'Atenção!',
      subTitle: mensagem,
      buttons: ['OK']
    });
    alert.present();
  }

}
