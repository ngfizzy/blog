import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { getCategories } from '../../mock-server';
import { NavItem, Nav } from '../../shared/models';

@Injectable({ providedIn: 'root' })
export class CoreService {
  getNav(): Observable<Nav> {
    return of(getCategories()).pipe(
      map(categories => {
        const navItems: NavItem[] = categories.map(category => {
          let path = null;
          let queries = null;

          if (category.name.toLowerCase() === 'poetry') {
            path = ['/poetry'];
          } else {
            path = [`/articles`];
            queries = { categoryId: `${category.id}` };
          }

          return {
            path,
            queries,
            name: category.name,
          };
        });

        const allArticles: NavItem = {
          name: 'All',
          path: ['/articles'],
        };

        navItems.unshift({ name: 'My Profile', path: ['/profile']}, allArticles);

        return {
          iconUrl: 'assets/avatar.png',
          items: navItems,
        };
      }),
    );
  }
}
