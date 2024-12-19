import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimbingRoutesComponent } from './climbing-routes/climbing-routes.component';
import { ClimbingRoutesDetailComponent } from './climbing-routes/climbing-routes-detail/climbing-routes-detail.component';
import { ClimbingRoutesEditComponent } from './climbing-routes/climbing-routes-edit/climbing-routes-edit.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/climbingRoutes', pathMatch: 'full' },
  {
    path: 'climbingRoutes',
    component: ClimbingRoutesComponent,
    children: [
      { path: 'new', component: ClimbingRoutesEditComponent },
      { path: ':_id', component: ClimbingRoutesDetailComponent },
      { path: ':_id/edit', component: ClimbingRoutesEditComponent }
    ],
  },
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
