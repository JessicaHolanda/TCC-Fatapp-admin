// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDY3XySQofefS6rVyuz-7rocX-0hQgaYok\n',
    authDomain: 'tccfatecscs2019-feeaf.firebaseapp.com',
    databaseURL: 'https://tccfatecscs2019-feeaf.firebaseio.com',
    projectId: 'tccfatecscs2019-feeaf',
    storageBucket: 'tccfatecscs2019-feeaf.appspot.com',
  },
  apiUrl: 'http://localhost:8080/api/',
  // apiUrl: 'https://myspotapp-1541881215537.appspot.com/api/' ,
  // apiCoreUrl: 'http://localhost:3000/',
  apiCoreUrl: 'http://ec2-54-188-117-176.us-west-2.compute.amazonaws.com/',
  // tslint:disable-next-line:max-line-length
  // apiCoreToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiaGVucmlxdWU2NjFAZ21haWwuY29tIiwiaWF0IjoxNTcxNzU0NTg5fQ.tBo13Rj60g5zYn9tRzBg3HMg9C4is4mCY18Cezj-jf8',
  // tslint:disable-next-line:max-line-length
  apiCoreToken:  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImVtYWlsIjoiaGVucmlxdWU2NjFAZ21haWwuY29tIiwiaWF0IjoxNTc1MjUwOTg2fQ.88uKawDVmWJvVuygC_WTNl3qg9mnUo7X4hDzUp9mKCM',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
