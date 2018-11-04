import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { CustomersListComponent } from '../app/components/customers/customers-list/customers-list.component';
import { CustomerDetailsComponent } from '../app/components/customers/customer-details/customer-details.component';
import { CreateCustomerComponent } from '../app/components/customers/create-customer/create-customer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardDetailsComponent } from './components/dashboard-details/dashboard-details.component';
import { GraphComponent } from './components/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomerDetailsComponent,
    CreateCustomerComponent,
    DashboardComponent,
    DashboardDetailsComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
