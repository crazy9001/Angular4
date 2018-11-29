import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UsersService} from './users.service';
import {User} from '../../auth/model/user.model';
import {PaginatedUser} from '../../auth/model/paginated-user.model';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users: PaginatedUser;
    currentUser: User;
    constructor(
        private httpClient: HttpClient,
        private userService: UsersService
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
    }

    ngOnInit() {
        this.userService.getUsers().then(users => this.users = users);
    }

    prevPage() {
        this.userService.getUsersAtUrl(this.users.prev_page_url).then(users => this.users = users);
    }

    nextPage() {
        this.userService.getUsersAtUrl(this.users.next_page_url).then(users => this.users = users);
    }
}
