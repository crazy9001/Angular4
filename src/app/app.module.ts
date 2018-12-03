import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS } from '@angular/common/http';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AppComponent} from './app.component';
import {AdminModule} from './admin/admin.module';
import {AuthModule} from './auth/auth.module';
import {VideosComponent} from './videos/videos.component';
import {ManagersModule} from './managers/managers.module';
import {TokenInterceptor} from './auth/intercreptors/token.intercreptor';
import {RefreshTokenInterceptor} from './auth/intercreptors/refreshToken.intercreptor';
import {AuthGuard} from './guard/auth.guard';
import {UsersService} from './managers/users/users.service';
import { HttpModule } from '@angular/http';
import { NgProgressModule } from 'ngx-progressbar';
import {CategoriesService} from './managers/categories/categories.service';
import { CreateVideoComponent } from './videos/create-video/create-video.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {VideoService} from './videos/video.service';
import { VideoDraftComponent } from './videos/video-draft/video-draft.component';
import { VideoWaitingPublicComponent } from './videos/video-waiting-public/video-waiting-public.component';
import { VideoPublishedComponent } from './videos/video-published/video-published.component';

@NgModule({
    declarations: [
        AppComponent,
        VideosComponent,
        CreateVideoComponent,
        VideoDraftComponent,
        VideoWaitingPublicComponent,
        VideoPublishedComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AdminModule,
        AuthModule,
        ManagersModule,
        HttpModule,
        NgProgressModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
        },
        {
            provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor,
            multi: true
        },
        AuthGuard,
        UsersService,
        CategoriesService,
        VideoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
