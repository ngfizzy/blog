import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { articlesReducer } from './state/articles.reducer';
import { ArticleEffects } from './state/articles.effects';
import { ArticleRoutingModule } from './articles-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './components/nav/nav.component';
import { PoemComponent } from './components/poem/poem.component';

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature('articles', articlesReducer),
    EffectsModule.forFeature([ArticleEffects]),
    ArticleRoutingModule,
  ],
  declarations: [
    ...ArticleRoutingModule.routeComponents,
    NavComponent,
    PoemComponent,
  ]
})
export class ArticlesModule {}
