import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Helloworld-Angular-App';
  imgUrl = "../assets/Bl_Logo.png"
  url = "https://www.bridgelabz.com/"

  ngOnInit(): void{
    this.title = "Hello from BridgeLabz."
  }

  onClick(){
    console.log("Save button is clicked");
    window.open(this.url, "_blank")
  }

}
