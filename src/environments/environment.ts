// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAIkADw82TzicVAJBlqYhR6K6KUfdJFgBk',
    authDomain: 'tracker-b6faa.firebaseapp.com',
    databaseURL: 'https://tracker-b6faa.firebaseio.com',
    projectId: 'tracker-b6faa',
    storageBucket: 'tracker-b6faa.appspot.com',
    messagingSenderId: '348146041923'
  }
};
