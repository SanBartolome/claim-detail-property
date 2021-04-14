import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { DetailsComponent } from './details/details.component';
import { DetailTextItemComponent } from './detail-text-item/detail-text-item.component';
import { GenericItemModule } from 'src/app/shared/components/generic-item/generic-item.module';
import { LocationInMapModule } from 'src/app/shared/components/location-in-map/location-in-map.module';
import { ImagesReelModule } from 'src/app/features/images-reel/images-reel.module';

@NgModule({
  declarations: [MainComponent, DetailsComponent, DetailTextItemComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    GenericItemModule,
    LocationInMapModule,
    ImagesReelModule,
  ],
})
export class MainModule {}
