import {NgModule, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminComponent} from '../admin.component';
import {AdminDashboardComponent} from '../admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './../../guard/auth.guard';
import {VideosComponent} from '../../videos/videos.component';
import {ManagersComponent} from '../../managers/managers.component';
import {UsersComponent} from '../../managers/users/users.component';
import {CategoriesComponent} from '../../managers/categories/categories.component';
import {VideoDraftComponent} from '../../videos/video-draft/video-draft.component';
import {VideoWaitingPublicComponent} from '../../videos/video-waiting-public/video-waiting-public.component';
import {VideoPublishedComponent} from '../../videos/video-published/video-published.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'Default',
                component: AdminComponent,
                canActivate: [AuthGuard],
                canActivateChild: [AuthGuard],
                children: [
                    {
                        path: '',
                        redirectTo: 'Dashboard',
                        pathMatch: 'full'
                    },
                    {
                        path: 'Dashboard',
                        component: AdminDashboardComponent
                    },
                    {
                        path: 'VideosManager',
                        component: VideosComponent,
                        children: [
                            {
                                path: '',
                                redirectTo: 'Draft',
                                pathMatch: 'full'
                            },
                            {
                                path: 'Draft',
                                component: VideoDraftComponent,
                            },
                            {
                                path: 'WaitingPublic',
                                component: VideoWaitingPublicComponent,
                            },
                            {
                                path: 'Published',
                                component: VideoPublishedComponent,
                            }
                        ]
                    },
                    {
                        path: 'Manager',
                        component: ManagersComponent,
                        children: [
                            {
                                path: '',
                                redirectTo: 'UserManager',
                                pathMatch: 'full'
                            },
                            {
                                path: 'UserManager',
                                component: UsersComponent,
                            },
                            {
                                path: 'CategoryManager',
                                component: CategoriesComponent,
                            }
                        ]
                    }
                ]
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {
}
