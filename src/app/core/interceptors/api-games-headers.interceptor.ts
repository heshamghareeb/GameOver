import { HttpInterceptorFn } from '@angular/common/http';

export const apiGamesHeadersInterceptor: HttpInterceptorFn = (req, next) => {
  if (
    req.url.includes(
      `https://free-to-play-games-database.p.rapidapi.com/api`
    )
  ){
    req = req.clone({
      setHeaders: {
        'X-RapidAPI-Key':
          '8f86b9eaa9msh0e6d5dfedb1eb80p1dba82jsn440848ee6e63',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      },
    });  }
  return next(req);
};
