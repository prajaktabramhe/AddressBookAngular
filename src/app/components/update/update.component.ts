import { Component, OnInit, Inject } from '@angular/core';
import { ContactServiceService } from './../../services/contact/contact-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  citiesAndStates = [
    {state: 'Delhi', cities: ['Delhi']},
    {state: 'Rajasthan' ,cities:['Kota', 'Jaipur', 'Jaisalmer', 'Bikaner']},
    {state: 'Maharashtra', cities: ['Pune', 'Mumbai', 'Nagpur']},
    {state: 'Uttranchal', cities: ['Badrinath', 'Kedarnath', 'Manali']},
    {state: 'Punjab', cities: ['Amritsar', 'Chandigarh', 'DEF', 'GHI']}
  ]

  name; phoneNumber; address; city; state; zip; 
   form: FormGroup;
  submitted: false;
  constructor(public dialogRef: MatDialogRef<UpdateComponent>,
              @Inject(MAT_DIALOG_DATA)public data: any,
              private formBuilder: FormBuilder,
              private contactService: ContactServiceService,
              private router: Router) {
console.log(data);

    this.name = data.contact.name;
    this.phoneNumber = data.contact.phoneNumber;
    this.address = data.contact.address;
    this.city = data.contact.city;
    this.state = data.contact.state;
    this.zip = data.contact.zip;
    // this.stateselect = data.contact.state;
  }

  ngOnInit(){
   
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    })
  }

  onSubmit(){
    if(this.form.valid){
      const reqObj = {
        address: this.form.value.address,
        city: this.form.value.city,
        name: this.form.value.name,
        phoneNumber: this.form.value.phoneNumber,
        state: this.form.value.state,
        zip: this.form.value.zip
      }
      this.contactService.updateContact(this.data.contact.addressBookId, reqObj).subscribe((response) => {
        console.log('Updation Successfully');
        console.log(response);
        this.dialogRef.close();
      })
    }
  }

  cities: any[];
  setCities(state: any){
    console.log(state);
    this.cities = state.cities;
  }

  cancel(){
    // this.router.navigateByUrl('home');
    this.dialogRef.close();
  }

}
