import { Routes } from '@angular/router';
import { LayotAuthComponent } from './core/shared/components/layot-auth/layot-auth.component';
import { LayotBlankComponent } from './core/shared/components/layot-blank/layot-blank.component';
import { authGuard } from './core/shared/guards/auth.guard';


export const routes: Routes = [

//test
  // {
  //   path: '',
  //   loadComponent: ()=>  import('../app/core/shared/components/layot-blank/layot-blank.component').then(() => LayotBlankComponent),
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'home',
  //       pathMatch: 'full' ,
  //     },
  //     {
  //       path: 'home',
  //       // pathMatch: 'full' ,
  //       loadComponent: () => import('./views/home/home.component').then((m) => m.HomeComponent),
  //       title: 'Home',
  //     },
  //   ]
  // },

    // LazyLoading Public Routing For Blank Pag


    {
      // canActivate:[authGuard],
      path: '',
      loadComponent: ()=>  import('../app/core/shared/components/layot-blank/layot-blank.component').then(() => LayotBlankComponent),
      children: [
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full' ,
        },
        {
          path: 'home',
          // pathMatch: 'full' ,
          loadComponent: () => import('./views/home/home.component').then((m) => m.HomeComponent),
          title: 'Home',
        },
        {
          path: 'games',
          loadComponent: () => import('./views/games/games/games.component').then((m) => m.GamesComponent),
          title: 'Games',
        },
        {
          path: 'games/:category',
          loadComponent: () => import('./views/games/games/games.component').then((m) => m.GamesComponent),
          title: 'Games',
        },
        {
          path: 'browser',
          loadComponent: () => import('./views/browser/browser/browser.component').then((m) => m.BrowserComponent),
          title: 'Browser',
        },
        {
          path: 'browser/:category',
          loadComponent: () => import('./views/browser/browser/browser.component').then((m) => m.BrowserComponent),
          title: 'Browser',
        },
        // {
        //   path: 'lib',
        //   canActivate: [AuthGuard],
        //   loadChildren: () =>
        //     import('./views/lib/lib.module').then((m) => m.LibModule),
        //   title: 'Lib',
        // },
        {
          path: 'search',
          loadComponent: () => import('./views/search/search/search.component').then((m) => m.SearchComponent),
          title: 'Search',
        },
        {
          path: 'details/:id',
          loadComponent: () => import('./views/details/details/details.component').then((m) => m.DetailsComponent),
          title: 'Details',
        },
        {
          path: 'aboutus',
          loadComponent: () => import('./views/aboutus/aboutus/aboutus.component').then((m) => m.AboutusComponent),
          title: 'About Us',
        },
      ],
    },


    // LazyLoading Routing For Autho

    {
      path: 'auth',
      // canActivate: [AuthGuard2],
      component: LayotAuthComponent,
      children: [
        { path: '', redirectTo: 'signin', pathMatch: 'full' },
        { path: 'signin',
          loadComponent:()=> import('./views/auth/login/login.component').then((m) => m.LoginComponent),
          title: 'SignIn'
        },
        { path: 'signup',
          loadComponent:()=> import('./views/auth/register/register.component').then((m) => m.RegisterComponent),
          title: 'SignUp'
        },
        // { path: 'signup', loadComponent:()=> RegisterComponent, title: 'SignUp' },
        // {
        //   path: '',
        //   loadChildren: () =>
        //     import('./views/auth/auth.module').then((m) => m.AuthModule),
        // },
      ],
    },


    // Not Found Page
    { path: '**',
    loadComponent:()=> import('./views/notfound/notfound/notfound.component').then((m) => m.NotfoundComponent),
    },
];
