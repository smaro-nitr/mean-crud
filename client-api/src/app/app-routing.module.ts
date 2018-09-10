import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
/* DEPRICATED
import { HttpModule } from '@angular/http';
*/

import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { SupportComponent } from './component/support/support.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: SupportComponent }
];

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    /* DEPRICATED
    HttpModule
    */
  ],
  exports: [
    NavbarComponent
  ]
})
export class AppRoutingModule { }