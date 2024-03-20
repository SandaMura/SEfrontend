import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CardModule} from "primeng/card";

const routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('libs/menu/src/public-api').then(m => m.MenuModule)
      },
      {
        path: 'questions',
        loadChildren: () => import('libs/questions/src/public-api').then(m => m.QuestionsModule)
      },
      {
        path: 'conclusions',
        loadChildren: () => import('libs/conclusions/src/public-api').then(m => m.ConclusionsModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
