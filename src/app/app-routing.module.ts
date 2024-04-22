import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'addproducts',
    loadChildren: () => import('./addproducts/addproducts.module').then( m => m.AddproductsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'addusers',
    loadChildren: () => import('./addusers/addusers.module').then( m => m.AddusersPageModule)
  },
  {
    path: 'myaccount',
    loadChildren: () => import('./myaccount/myaccount.module').then( m => m.MyaccountPageModule)
  },
  {
    path: 'updateproduct/:id',
    loadChildren: () => import('./updateproduct/updateproduct.module').then( m => m.UpdateproductPageModule)
  },
  {
    path: 'updateuser/:id',
    loadChildren: () => import('./updateuser/updateuser.module').then( m => m.UpdateuserPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },

  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  },  {
    path: 'addmessages',
    loadChildren: () => import('./addmessages/addmessages.module').then( m => m.AddmessagesPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
