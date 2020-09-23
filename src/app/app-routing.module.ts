import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GachgharformComponent } from './gachgharform/gachgharform.component';
import { GachgharlistComponent } from './gachgharlist/gachgharlist.component';
import { BloodComponent } from './blood/blood.component';
import { UrinComponent } from './urin/urin.component';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { PostsComponent } from './module/posts/posts.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'',component:DefaultComponent,children:[{
    path:'',component:DashboardComponent
  },{
    path:'posts',component:PostsComponent
  },
  {path:'jachgharform',component:GachgharformComponent},
  {path:'jachgharlist',component:GachgharlistComponent},
]},

{path:'signup',component:UserComponent},
  // {path:'blooddata',component:BloodComponent},
  // {path:'urin',component:UrinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
