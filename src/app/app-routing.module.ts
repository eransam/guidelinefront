import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkerListComponent } from '../components/worker-list/worker-list.component';

const routes: Routes = [
  { path: 'workers', component: WorkerListComponent },
  { path: '', redirectTo: '/workers', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
