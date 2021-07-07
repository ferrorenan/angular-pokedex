import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleNavActiveClass = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleActiveClassNav(): void {

    this.toggleNavActiveClass = !this.toggleNavActiveClass;
  }

  closeMenu(): boolean {

    return this.toggleNavActiveClass = false;
  }
}
