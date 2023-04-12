import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamesDetailsComponent } from './games-details/games-details.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"", redirectTo:'home', pathMatch:"full" },
  {path:"home", canActivate:[AuthGuard], component:HomeComponent},
  {path:"gamedetails/:id", canActivate:[AuthGuard], component:GamesDetailsComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  { path: 'games', loadChildren: () => import('./games/games.module').then(m => m.GamesModule),canActivate:[AuthGuard] },
  { path: 'games/:type/:data', loadChildren: () => import('./games/games.module').then(m => m.GamesModule),canActivate:[AuthGuard] },
  // {path:"cart", component:CartComponent},
  {path:"**", component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
