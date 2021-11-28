import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routePage:string = "recipes"
  title = 'recipes-book';

  showComponents(pageLink: string){
    this.routePage = pageLink;
    console.log(this.routePage)
  }
}
