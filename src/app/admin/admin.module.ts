import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing/admin-routing.module';
import {AdminComponent} from './admin.component';
import {AdminHeaderComponent} from './admin-header/admin-header.component';
import { AdminHeaderSidebarComponent } from './admin-header-sidebar/admin-header-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        AdminHeaderComponent,
        AdminHeaderSidebarComponent,
        AdminFooterComponent,
        AdminDashboardComponent,
        AdminControlSidebarComponent
    ],

    exports: [AdminComponent],
})
export class AdminModule { }
