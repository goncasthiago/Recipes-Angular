import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() pageLink : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  routeLink(link){
    this.pageLink.emit(link);
  }

  ngOnInit(): void {
  }

}
