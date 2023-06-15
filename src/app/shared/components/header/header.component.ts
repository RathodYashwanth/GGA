import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { GgaService } from 'src/app/gga.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(private navCtrl:NavController,
              private router:Router,
              private menu: MenuController,
              private ggaService:GgaService) { }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
   
  }
  

  navigateTo(page:string){
    this.makeButtonActiveClass();
    this.ggaService.currentPage = page;
    this.navCtrl.navigateForward('/'+page);
  }

  checkForLogin(){
    this.router.navigateByUrl('/admin');
  }

  donate(){
      window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FMQDK7WFWACC8&source=url","_blank");
  }

  toggleMenu(){
    this.menu.open('m1');
  }

  makeButtonActiveClass(){
    let home = <HTMLElement>document.querySelector("#home");
    let about = <HTMLElement>document.querySelector("#about");
    let eventsAndCharity = <HTMLElement>document.querySelector("#eventsAndCharity");
    let leadership = <HTMLElement>document.querySelector("#leadership");
    let history = <HTMLElement>document.querySelector("#history");
    let member = <HTMLElement>document.querySelector("#member");
    let contact = <HTMLElement>document.querySelector("#contact");
     console.log("came to the make buttom method with page as ",this.ggaService.currentPage);
    let page = this.ggaService.currentPage;

    if(page === "home"){
      home.style.background = "#F6A52F !important ";
      about.style.background = "transparent  !important";
      eventsAndCharity.style.background = "transparent  !important";
      leadership.style.background = "transparent  !important";
      history.style.background = "transparent  !important";
      member.style.background = "transparent  !important";
      contact.style.background = "transparent  !important";
    }else if(page === "about"){
      home.style.background = "transparent !important !important";
      about.style.background = "#F6A52F !important !important";
      eventsAndCharity.style.background = "transparent !important !important";
      leadership.style.background = "transparent !important !important";
      history.style.background = "transparent !important !important";
      member.style.background = "transparent !important";
      contact.style.background = "transparent !important";
    }else if(page === "gallery" || page === "news" || page === "charity"){
      home.style.background = "transparent !important";
      about.style.background = "transparent !important";
      eventsAndCharity.style.background = "#F6A52F !important";
      leadership.style.background = "transparent !important";
      history.style.background = "transparent !important";
      member.style.background = "transparent !important";
      contact.style.background = "transparent !important";
    }else if(page === "leadership/founders" || page === "leadership/board-of-directors" || page === "leadership/executive-committee" || page === "leadership/advisory-committee" || page === "leadership/other-committee"){
      home.style.background = "transparent !important";
      about.style.background = "transparent !important";
      eventsAndCharity.style.background = "transparent !important";
      leadership.style.background = "#F6A52F !important";
      history.style.background = "transparent !important";
      member.style.background = "transparent !important";
      contact.style.background = "transparent !important";
    }else if(page === "history" || page === "history/gor-history" || page === "history/gothras" || page === "history/festivals"){
      home.style.background = "transparent !important";
      about.style.background = "transparent !important";
      eventsAndCharity.style.background = "transparent !important";
      leadership.style.background = "transparent !important";
      history.style.background = "#F6A52F !important";
      member.style.background = "transparent !important";
      contact.style.background = "transparent !important";
    }else if(page === "membership/registration" || page === "membership/volunteer"){
      home.style.background = "transparent !important";
      about.style.background = "transparent !important";
      eventsAndCharity.style.background = "transparent !important";
      leadership.style.background = "transparent !important";
      history.style.background = "transparent !important";
      member.style.background = "#F6A52F !important";
      contact.style.background = "transparent !important";
    }else if(page === "contact"){
      home.style.background = "transparent !important";
      about.style.background = "transparent !important";
      eventsAndCharity.style.background = "transparent !important";
      leadership.style.background = "transparent !important";
      history.style.background = "transparent !important";
      member.style.background = "transparent !important";
      contact.style.background = "#F6A52F !important";
    }


  }


}
