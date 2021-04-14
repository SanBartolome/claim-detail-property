import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImagesReelComponent } from './images-reel.component';
import { ImagesReelItemComponent } from './images-reel-item/images-reel-item.component';

@NgModule({
  declarations: [ImagesReelComponent, ImagesReelItemComponent],
  imports: [CommonModule, FormsModule],
  exports: [ImagesReelComponent],
})
export class ImagesReelModule {}
