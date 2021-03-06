import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from '../auth/login/login.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'Default', pathMatch: 'full' },
            { path: 'Default/Login', component: LoginComponent },
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
