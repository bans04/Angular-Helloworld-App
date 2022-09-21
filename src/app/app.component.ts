import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Helloworld-Angular-App';
  imgUrl = "../assets/Bl_Logo.png"

  ngOnInit(): void{
    this.title = "Hello from BridgeLabz."
  }
}
