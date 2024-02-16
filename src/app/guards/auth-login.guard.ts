import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';

export function adminGuard(redirectRoute: string): CanActivateFn {
  return async () => {
    const auth: AuthService = inject(AuthService);
    const router: Router = inject(Router);
    const isFlagEnabled = auth.isAdminEnabled();
    console.log(isFlagEnabled || router.createUrlTree(['/', redirectRoute]));
    if(await isFlagEnabled) {
      return router.createUrlTree(['/', redirectRoute]);
    }
    return false;
  }
};