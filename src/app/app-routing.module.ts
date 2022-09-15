import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes =[
  {path:'',component: HomeComponent},
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
