import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navegar( idItem: any ){
    const itemEscogido = document.getElementById(idItem);
    const itemsMenu = document.querySelectorAll('.menu-items__item');
    itemsMenu.forEach( (item) => item.classList.remove('active'));
    itemEscogido?.classList.add('active');
  }

}
