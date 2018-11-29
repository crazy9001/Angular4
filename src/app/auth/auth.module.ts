import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AuthService} from './auth.service';
import {LoginComponent} from './login/login.component';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule {
}
