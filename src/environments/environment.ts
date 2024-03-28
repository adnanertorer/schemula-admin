// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiUrl: 'https://lifearts-api.almulayazilim.com/api',
   apiUrl: 'http://localhost:5001/api',
   mainUrl: 'http://localhost:5001/',
 // apiUrl: 'http://157.90.74.92/api',
  access_token_name: 'access_token',
  refresh_token_name: 'refresh-token',
  logout_event_name: 'logout-event',
  user_email: 'lifearts_email',
  access_time: 'access_time'
};

export const participantTypeEnum = {
  adult: 1,
  child: 2,
  none: 3
}

export const participantEnum = {
  personal: 1,
  group: 2,
  closedGroup: 3,
  none: 4
}

export enum daysEnum {
  Pazar = 0,
  Pazartesi = 1,
  Sali = 2,
  Carsamba = 3,
  Persembe = 4,
  Cuma = 5,
  Cumartesi = 6
}

export interface almulaDays {
  id: number;
  dayName: string;
}

export enum TransactionTypeEnum {
  PaketSatis = 1,
  UrunSatis = 2,
  Hakedis = 3,
  UrunAlis = 4,
  Tahsilat = 5,
  Odeme = 6
}

export enum CashBoxTypeEnum {
  Cash = 1,
  Bank = 2
}

export enum PersonTypeEnum {
  Staff = 1,
  Supplier = 2,
  Customer = 3
}



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
