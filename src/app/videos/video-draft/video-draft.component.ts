import {Component, OnInit} from '@angular/core';
import { VideoService } from '../video.service';
import {NgProgress} from 'ngx-progressbar';
import {PaginatedVideo} from '../model/paginated-video.model';

@Component({
    selector: 'app-video-draft',
    templateUrl: './video-draft.component.html',
    styleUrls: ['./video-draft.component.css']
})
export class VideoDraftComponent implements OnInit {
    videos: PaginatedVideo;
    constructor(
        private videoService: VideoService,
        public progressService: NgProgress
    ) {
    }

    ngOnInit() {
        this.videoService.getDraftVideo().then(videos => this.videos = videos);
    }

    prevPage() {
        this.videoService.getVideosAtUrl(this.videos.prev_page_url).then(videos => this.videos = videos);
    }

    nextPage() {
        this.videoService.getVideosAtUrl(this.videos.next_page_url).then(videos => this.videos = videos);
    }

    showDetailVideo(slug: string) {
        alert(slug);
    }

}
