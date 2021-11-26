import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from '../shared/components/top-navigation/top-navigation.component';
import { NavigationComponent } from '../shared/components/navigation/navigation.component';
import { LayoutComponent } from './layout.component';
import { BottomFooterComponent } from '../shared/components/bottom-footer/bottom-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent,
    TopNavigationComponent,
    NavigationComponent,
    BottomFooterComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
