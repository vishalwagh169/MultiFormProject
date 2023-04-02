import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiformsComponent } from './multiforms/multiforms.component';

const routes: Routes = [
  {path:"multiforms",component:MultiformsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
