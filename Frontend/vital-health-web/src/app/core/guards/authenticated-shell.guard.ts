import { CanMatchFn } from '@angular/router';

/** Prevents the authenticated application shell from claiming the empty URL. */
export const authenticatedShellGuard: CanMatchFn = (_route, segments) => segments.length > 0;
