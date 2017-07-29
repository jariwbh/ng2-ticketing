import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

import { RegisterComponent } from './register/register.component';
import { PricingComponent } from './pricing/pricing.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';

export const PagesRoutes: Routes = [
  //theme comp path start
        {
            path: 'login',
            component: LoginComponent
        },{
            path: 'lock',
            component: LockComponent
        },{
            path: 'register',
            component: RegisterComponent
        },{
            path: 'pricing',
            component: PricingComponent
        },
     //theme comp path End
  {
    path: 'pages', component: PagesComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(PagesRoutes);

