import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {HttpErrorResponse} from '@angular/common/http';
import {NgProgress} from 'ngx-progressbar';
import { VideoService } from '../video.service';

@Component({
    selector: 'app-create-video',
    templateUrl: './create-video.component.html',
    styleUrls: ['./create-video.component.css']
})
export class CreateVideoComponent implements OnInit {

    f: FormGroup;
    subScription: Subscription;

    constructor(
        private formBuilder: FormBuilder,
        private videoService: VideoService,
        public progressService: NgProgress
    ) {

    }

    ngOnInit() {
        this.f = this.formBuilder.group({
            title: [null, [Validators.required]],
            description: [null, [Validators.required]],
            category_id: [null, [Validators.required]],
            sub_category: [null, null],
            tag: [null, null],
            source: [null, null],
            seo_title: [null, null],
            seo_keyword: [null, null],
            seo_description: [null, null],
            publish_at: [null, null],
        });
    }

    onSubmit() {
        this.progressService.start();
        this.subScription = this.videoService.create(this.f.value).subscribe(res => {
            this.progressService.done();
            this.f.reset();
        }, (errorRes: HttpErrorResponse) => {
            if (errorRes.status === 401) {
                this.progressService.done();
            }
        });

    }

}
