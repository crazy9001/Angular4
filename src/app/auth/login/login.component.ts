import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from './../auth.service';
import {Subscription} from 'rxjs/Subscription';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {NgProgress} from 'ngx-progressbar';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    f: FormGroup;
    subScription: Subscription;
    errorCredentials: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private routerService: Router,
        public progressService: NgProgress
    ) {
    }

    ngOnInit() {
        this.f = this.formBuilder.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]]
        });
    }

    onSubmit() {
        this.progressService.start();
        this.subScription = this.authService.login(this.f.value).subscribe(res => {
            this.progressService.done();
            this.routerService.navigate(['Default']);
        }, (errorRes: HttpErrorResponse) => {
            if (errorRes.status === 401) {
                this.errorCredentials = true;
                this.progressService.done();
            }
        });

    }

}
