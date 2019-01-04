import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component'

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path:'login', loadChildren:'./login/login.module#LoginModule' },
    { path:'project', loadChildren:'./project/project.module#ProjectModule' },
    { path:'task', loadChildren:'./task/task.module#TaskModule' },
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
