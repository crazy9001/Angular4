import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users/users.component';
import { ManagersComponent } from './managers.component';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
    declarations: [
        UsersComponent,
        ManagersComponent,
        CategoriesComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
})
export class ManagersModule {
}
