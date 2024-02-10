import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { EventactionComponent } from './eventaction/eventaction.component';
import { EmployeedataComponent } from './employeedata/employeedata.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', component: EmployeedataComponent  }, 
  { path: 'event', component: EventactionComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
