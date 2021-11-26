import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './container/album/album.component';
import { AlbumItemComponent } from './components/album-item/album-item.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BreadcrumbsComponent } from '../shared/components/breadcrumbs/breadcrumbs.component';
import { NavigationComponent } from '../shared/components/navigation/navigation.component';
import { TopNavigationComponent } from '../shared/components/top-navigation/top-navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AlbumComponent,
    AlbumItemComponent,
    PaginationComponent,
    BreadcrumbsComponent,
    //NavigationComponent,
    //TopNavigationComponent,
  ],
  imports: [CommonModule],
  //exports: [AlbumComponent],
})
export class AlbumModule {}
