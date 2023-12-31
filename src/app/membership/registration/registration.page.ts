import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { ContactService } from 'src/app/contact/contact.service';
import { MembershipService } from '../membership.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(private memberService:MembershipService,
    private toastCtrl:ToastController,
    private navCtrl:NavController,
    private contactService: ContactService) { }

  registerForm:FormGroup;
  countries:string[] = [];
  countriesResidence:string[] = [];
  states:string[] = [];
  Originstates:string[] = [];
  ukSelected:boolean = false;
  ukOriginSelected:boolean = false;
  middleEastSelected:boolean = false;
  middleEastOriginSelected:boolean = false;

  ngOnInit() {
    this.countriesResidence = this.memberService.countriesWithoutIndia;
    this.countries = this.memberService.countries;
    this.registerForm = new FormGroup({
      'title': new FormControl(null),
      'firstName': new FormControl(null,[Validators.required]),
      'lastName': new FormControl(null,[Validators.required]),
      'email': new FormControl(null,[Validators.email]),
      'phone': new FormControl(null),
      'profession': new FormControl(null),
      'interestHobbies': new FormControl(null),
      'addressline1': new FormControl(null),
      'addressline2': new FormControl(null),
      'country': new FormControl(null,[Validators.required]),
      'state': new FormControl(null,[Validators.required]),
      'city': new FormControl(null),
      'countryOrigin': new FormControl(null,[Validators.required]),
      'stateOrigin': new FormControl(null,[Validators.required]),
      'cityOrigin': new FormControl(null),
      'zip': new FormControl(null)
    });
    this.registerForm.controls.state.disable();
    this.registerForm.controls.stateOrigin.disable();
  }

  countryChanged(event:any){
    this.registerForm.controls.state.enable();
    this.states = [];
    this.ukSelected = false;
    this.middleEastSelected = false;
    switch(event.value){
      case "Australia":{
        this.states = this.memberService.australiaStates;
        break;
      }
      case "Canada":{
        this.states = this.memberService.canadaStates;
        break;
      }
      case "India":{
        this.states = this.memberService.indiaStates;
        break;
      }
      case "United Kingdom":{
        this.ukSelected = true;
        this.states = this.memberService.ukStates;
        break;
      }
      case "Middle East":{
        this.middleEastSelected = true;
        this.states = this.memberService.middleEastStates;
        break;
      }
      case "United States of America":{
        this.states = this.memberService.usaStates;
        break;
      }
    }
  }

  countryOriginChanged(event:any){
    this.registerForm.controls.stateOrigin.enable();
    this.Originstates = [];
    this.ukOriginSelected = false;
    this.middleEastOriginSelected = false;
    switch(event.value){
      case "Australia":{
        this.Originstates = this.memberService.australiaStates;
        break;
      }
      case "Canada":{
        this.Originstates = this.memberService.canadaStates;
        break;
      }
      case "India":{
        this.Originstates = this.memberService.indiaStates;
        break;
      }
      case "United Kingdom":{
        this.ukOriginSelected = true;
        this.Originstates = this.memberService.ukStates;
        break;
      }
      case "Middle East":{
        this.middleEastOriginSelected = true;
        this.Originstates = this.memberService.middleEastStates;
        break;
      }
      case "United States of America":{
        this.Originstates = this.memberService.usaStates;
        break;
      }
    }
  }

  register(){
    if(this.registerForm.valid){
      let registerRequest:any = {};
      registerRequest.title = this.registerForm.controls.title.value;
      registerRequest.firstName = this.registerForm.controls.firstName.value;
      registerRequest.lastName = this.registerForm.controls.lastName.value;
      registerRequest.email = this.registerForm.controls.email.value;
      registerRequest.phone = this.registerForm.controls.phone.value;
      registerRequest.profession = this.registerForm.controls.profession.value;
      registerRequest.interestHobbies = this.registerForm.controls.interestHobbies.value;
      registerRequest.addressline1 = this.registerForm.controls.addressline1.value;
      registerRequest.addressline2 = this.registerForm.controls.addressline2.value;
      registerRequest.country = this.registerForm.controls.country.value;
      registerRequest.countryOrigin = this.registerForm.controls.countryOrigin.value;
      registerRequest.state = this.registerForm.controls.state.value;
      registerRequest.stateOrigin = this.registerForm.controls.stateOrigin.value;
      registerRequest.city = this.registerForm.controls.city.value;
      registerRequest.cityOrigin = this.registerForm.controls.cityOrigin.value;
      registerRequest.zip = this.registerForm.controls.zip.value;
      this.memberService.registerMember(registerRequest).subscribe( () => {
        let contactGGARequest:any = {};
        contactGGARequest.name= this.registerForm.controls.firstName.value + this.registerForm.controls.lastName.value;
        contactGGARequest.email= this.registerForm.controls.email.value;
        contactGGARequest.message= this.registerForm.controls.firstName.value + this.registerForm.controls.lastName.value +" has registered with GGA" ;
        this.contactService.contactGGA(contactGGARequest).subscribe( contactedGGA => {});
        this.toastCtrl.create({
          message:'Thank you for being a member with GGA',
          duration:3000,
          position:'middle'
        }).then(toast => {
          toast.present();
          this.navCtrl.navigateForward("/home");
        });
      });
      this.registerForm.reset();
    }
  }

}
