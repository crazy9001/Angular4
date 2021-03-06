import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {environment} from './../../environments/environment.prod';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Observable';
import {PaginatedVideo} from './model/paginated-video.model';
import {NgProgress} from 'ngx-progressbar';
import {PaginatedUser} from '../auth/model/paginated-user.model';

@Injectable()
export class VideoService {
    private apiVideoDraft = '/video/draft';
    constructor(
        private httpClient: HttpClient,
        public progressService: NgProgress
    ) {
    }

    create( video: {
                title: string,
                description: string,
                content: string,
                category_id: number,
                source: string,
                status: string,
                highlight: number,
                thumbnails: string,
                publish_at: string,
                seo_title: string,
                seo_description: string,
                seo_keywords: string
            }) {
                return this.httpClient.post<any>(`${environment.api_url}/video`, video)
                    .do(data => {
                        console.log(data);
                });
            }

    getDraftVideo(): Promise<PaginatedVideo> {
        this.progressService.start();
        return this.httpClient.get(`${environment.api_url}` + this.apiVideoDraft)
            .toPromise()
            .then((response) => {
                console.log(response);
                this.progressService.done();
                return response as PaginatedVideo;
            })
            .catch(this.handleError);
    }

    getVideosAtUrl(url: string): Promise<PaginatedVideo> {
        this.progressService.start();
        return this.httpClient.get(url)
            .toPromise()
            .then((response) => {
                this.progressService.done();
                return response as PaginatedVideo;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        this.progressService.done();
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
