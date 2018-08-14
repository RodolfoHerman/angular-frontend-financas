import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FinancasComponent } from './financas/financas.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'financas', component: FinancasComponent},
    {path: 'about', component: AboutComponent}
]