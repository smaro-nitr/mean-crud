import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../service/portfolio.service';
import { Contact } from '../../model/contact';
import { Observable } from 'rxjs';
import { Config } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PortfolioService]
})

export class HomeComponent implements OnInit {
  error : any;
  contacts : any;
  contact : Contact;
  _id : string;
  first_name : string;
  last_name : string;
  phone_number : string;

  displayedColumns = ['contactid', 'fullname', 'phonenumber', 'delete'];
  
  constructor(private portfolioservice : PortfolioService) { }

  ngOnInit() {
    this.viewContact();
  }

  addContact(){
    const newContact = new Contact(null, this.first_name, this.last_name, this.phone_number);
    this.portfolioservice.addContact(newContact)
      .subscribe((data) => this.contacts = [...this.contacts, data]);
  }

  viewContact(){
    this.portfolioservice.getContact()
      .subscribe(
        (data) => this.contacts = data,
        error => this.error = error
      );
  }
  
  updateContact(){
    const updateContact = new Contact(this._id, this.first_name, this.last_name, this.phone_number);
    const contacts = this.contacts;
    this.portfolioservice.updateContact(updateContact, this._id).subscribe(data => {
      for(var i = 0; i< contacts.length; i++){
        if(contacts[i]._id == this._id){
          this.contacts = [...this.contacts.splice(0, i),data,...this.contacts.splice(i, contacts.length)] 
        }
      }
    });
  }

  deleteContact(id:any){
    var contacts = this.contacts;
    this.portfolioservice.deleteContact(id).subscribe(data => {
      for(var i = 0; i< contacts.length; i++){
        if(contacts[i]._id == id){
          this.contacts = [...this.contacts.splice(0, i),...this.contacts.splice(i, contacts.length)] 
        }
      }
    });
  }  
}
