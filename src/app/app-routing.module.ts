import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroesComponent} from './heroes/heroes.component';

const routes: Routes = [
  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
