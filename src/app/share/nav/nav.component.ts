import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private UserService: UserService, private router: Router) {}

  ngOnInit(): void { }

  logout() {
    this.UserService.logout()
      .then(() => this.router.navigate(['/']))
      .catch((e) => console.log(e.message));
  }

}
