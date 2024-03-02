import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

const routes: any[]=[
  {
    path: '',
    children: [
      {
        path: 'question',
        loadChildren: () => import('libs/questions/src/public-api').then(m => m.QuestionsModule)
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
    RouterModule.forRoot((routes))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
