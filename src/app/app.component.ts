import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Helloworld-Angular-App';
  imgUrl = "../assets/Bl_Logo.png";
  url = "https://www.bridgelabz.com/";
  userName: string = "";
  userNameError: string = "";

  ngOnInit(): void{
    this.title = "Hello from BridgeLabz."
  }

  onClick(){
    console.log("Save button is clicked");
    window.open(this.url, "_blank")
  }

  checkInput($event:any){
    // console.log($event.data)
    const userNameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    if(userNameRegex.test(this.userName)){
      // console.log("we inside if condi");
      this.userNameError = "";
      return;
    }
    this.userNameError = "  userName is incorrect, First char should be Cap and min 3 cha";
  }
}
