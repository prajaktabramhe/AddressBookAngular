import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactServiceService } from './../../services/contact/contact-service.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contactList: any;
  constructor(private contactService: ContactServiceService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts(){
    this.contactService.getAllContacts().subscribe((res: any) => {
      console.log(res);
      this.contactList = res.data;
    })
  }

  delete(id){
    this.contactService.deleteEmployee(id).subscribe((response) => {
      console.log("Deletion SuccessFull")
      this.getAllContacts();
    });
  }

  addNewContact(){
    console.log('redirecting now');
    this.router.navigateByUrl('add')
  }
}
