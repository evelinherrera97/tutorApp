import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLeadComponent } from './create-lead/create-lead.component';
import { HomePage } from './home.page';
import { ListLeadComponent } from './list-lead/list-lead.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/list-lead',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'create-lead',
        component: CreateLeadComponent
      },
      {
        path: 'list-lead',
        component: ListLeadComponent
      },

    ]
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
