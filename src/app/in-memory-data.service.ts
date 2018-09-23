import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 1, name: 'Mr. Nice'},
      {id: 2, name: 'Narco'},
      {id: 3, name: 'Bombasto'},
    ];
    return {heroes};
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
