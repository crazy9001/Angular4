import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {PaginatedUser} from '../../auth/model/paginated-user.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {NgProgress} from 'ngx-progressbar';

@Injectable()
export class CategoriesService {
    private apiVideocategory = '/video/category';
    constructor(
        private http: HttpClient,
        public progressService: NgProgress
    ) {
    }
    getCategories(): Promise<any> {
        this.progressService.start();
        return this.http.get(`${environment.api_url}` + this.apiVideocategory)
            .toPromise()
            .then((response) => {
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

