import {Component, OnInit} from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { Router } from '@angular/router';

import { User } from './../../auth/model/user.model';

@Component({
    selector: 'app-admin-header',
    templateUrl: './admin-header.component.html',
    styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
    user: User;
    constructor(
        private authService: AuthService,
        private routerService: Router
    ) {
    }

    ngOnInit() {
        this.user = this.authService.getUser();
    }

    onLogout(event) {
        event.preventDefault();
        this.authService.logout();
        this.routerService.navigate(['auth/login']);
    }
}
