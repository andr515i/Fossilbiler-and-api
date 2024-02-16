import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
 constructor(public authService: AuthService) {}

 isAdminEnabled: boolean = false;

async ngOnInit() {
  this.isAdminEnabled = await this.authService.isAdminEnabled();
}


async toggleLogin() {
  await this.authService.toggleLogin();
  this.isAdminEnabled = await this.authService.isAdminEnabled();
}

}
