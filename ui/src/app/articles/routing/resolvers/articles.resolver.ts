import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../../models/article.model';
import { AppState, ArticlesActions, ArticlesSelectors } from '@app/store';
import { Store, select } from '@ngrx/store';
import { tap, filter, first, map, take } from 'rxjs/operators';
import { GridData } from '@app/shared/models/grid-data.model';

interface Result {
  articles: Array<Article>;
  collectionSize: number;
}

@Injectable()
export class ArticlesResolver implements Resolve<boolean> {

  constructor(
    private store: Store<AppState.State>
  ) { }

  resolve(): Observable<boolean> {
    this.initRequest();

    return this.store
      .pipe(select(ArticlesSelectors.selectArticlesLoaded))
      .pipe(filter((bool: boolean) => bool))
      .pipe(first());
  }

  initRequest() {
    this.store.dispatch(new ArticlesActions.LoadArticlesListRequested());
  }
}
