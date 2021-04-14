import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GenericItemComponent } from './generic-item.component';

@NgModule({
  declarations: [GenericItemComponent],
  imports: [CommonModule, FormsModule],
  exports: [GenericItemComponent],
})
export class GenericItemModule {}
