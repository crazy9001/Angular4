import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {environment} from './../../environments/environment.prod';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class VideoService {
    constructor(
        private httpClient: HttpClient,
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
}
