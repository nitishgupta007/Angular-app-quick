import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { TopnavDashboardComponent } from './topnav-dashboard/topnav-dashboard.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  // with Header
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    // children: [
    //   { path: 'stats', component: DashboardComponent, pathMatch: 'full'},
    // ]
},

// without header
  { path: '', component: LoginComponent },
  
  { path: "**" , component: PageNotFoundComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents =[LoginHeaderComponent, DashboardComponent, LoginComponent, TopnavDashboardComponent, PageNotFoundComponent, SidebarComponent  ]
