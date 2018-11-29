import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {PaginatedUser} from '../../auth/model/paginated-user.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {NgProgress} from 'ngx-progressbar';

@Injectable()
export class UsersService {
    private apiUser = '/users';
    public isLoading = false;

    constructor(
        private http: HttpClient,
        public progressService: NgProgress
    ) {
    }

    getUsers(): Promise<PaginatedUser> {
        this.isLoading = true;
        this.progressService.start();
        return this.http.get(`${environment.api_url}` + this.apiUser)
            .toPromise()
            .then((response) => {
                this.isLoading = false;
                this.progressService.done();
                return response as PaginatedUser;
            })
            .catch(this.handleError);
    }


    getUsersAtUrl(url: string): Promise<PaginatedUser> {
        this.isLoading = true;
        this.progressService.start();
        return this.http.get(url)
            .toPromise()
            .then((response) => {
                this.isLoading = false;
                this.progressService.done();
                return response as PaginatedUser;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        this.progressService.done();
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

