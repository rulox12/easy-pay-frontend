import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/dashboard', title: 'Panel', icon: 'ni-tv-2 text-primary', class: ''},
  {path: '/user', title: 'Usuarios', icon: 'ni-single-02 text-blue', class: ''},
  {path: '/commerce', title: 'Comercios', icon: 'ni-briefcase-24 text-yellow', class: ''},
  {path: '/bill', title: 'Facturas', icon: 'ni-briefcase-24 text-green', class: ''},
  {path: '/payment', title: 'Pagos', icon: 'ni ni-credit-card text-red', class: ''},

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (!user?.isAdmin) {
      this.menuItems = [
        {path: '/dashboard', title: 'Panel', icon: 'ni-tv-2 text-primary', class: ''},
        {path: '/bill', title: 'Facturas', icon: 'ni-briefcase-24 text-green', class: ''},
        {path: '/payment', title: 'Pagos', icon: 'ni ni-credit-card text-red', class: ''},
      ];
    } else {
      this.menuItems = [
        {path: '/dashboard', title: 'Panel', icon: 'ni-tv-2 text-primary', class: ''},
        {path: '/user', title: 'Usuarios', icon: 'ni-single-02 text-blue', class: ''},
        {path: '/commerce', title: 'Comercios', icon: 'ni-briefcase-24 text-yellow', class: ''},
        {path: '/bill', title: 'Facturas', icon: 'ni-briefcase-24 text-green', class: ''},
        {path: '/payment', title: 'Pagos', icon: 'ni ni-credit-card text-red', class: ''},
      ];
    }

    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
