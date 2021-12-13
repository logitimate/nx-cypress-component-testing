import { InjectionToken } from '@angular/core';

export interface AnalyticsToken {
  name: string;
  nx: boolean;
  ngrx: boolean;
  cypress: boolean;
  i18nAngular: boolean;
}
/**
 * @docs-private
 **/
export const ANALYTICS_TOKEN: InjectionToken<AnalyticsToken> =
  new InjectionToken<AnalyticsToken>('ANALYTICS_TOKEN');
