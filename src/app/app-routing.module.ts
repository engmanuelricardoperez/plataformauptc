import { CreateCustomerComponent } from '../app/components/customers/create-customer/create-customer.component';
import { CustomersListComponent } from '../app/components/customers/customers-list/customers-list.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'customers', pathMatch: 'full' },
    { path: 'customers', component: CustomersListComponent },
    { path: 'add', component: CreateCustomerComponent },
    { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
