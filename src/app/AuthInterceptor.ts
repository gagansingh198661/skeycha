// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpInterceptorFn } from "@angular/common/http";
// import { inject, Injectable } from "@angular/core";
// import { Observable, catchError, finalize, throwError } from "rxjs";
// import { LoginService } from "./services/login-service";

// export const authInterceptor: HttpInterceptorFn = (req, next) => {
  
//   const loginService = inject(LoginService);

//   const authReq = req.clone(
//     {
//         withCredentials: true
//     }
//   );

//   return next(authReq).pipe(
//     catchError(error => {
//       console.error('HTTP Error:', error);
//       return throwError(error);
//     })
//   );
// };
