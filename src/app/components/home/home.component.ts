import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactServiceService } from './../../services/contact/contact-service.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from './../update/update.component';


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
      this.contactList = res.data.sort();
    })
  }

  

  delete(id){
   
    this.contactService.deleteEmployee(id).subscribe((response) => {
      console.log("Deletion SuccessFull")
      this.getAllContacts();
    });
  }

  ConfirmDelete(id:any)
  {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(id);
        dialogRef.close();
      }
    });
  }

   update(contact){
    console.log(contact);
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '70%',
      height: '85%',
      data: {contact}
    });
    this.dialog.afterAllClosed.subscribe((response) => {
      this.getAllContacts();
    })
  }


  addNewContact(){
    console.log('redirecting now');
    this.router.navigateByUrl('add')
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {

}