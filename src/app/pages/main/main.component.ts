import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Claim } from 'src/app/core/domain/claim.model';
import { newClaim } from 'src/app/core/api/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  claim: Claim;
  isPhotoSelected = true;
  selectedPhoto: string | undefined;

  constructor() {
    this.claim = newClaim;
    this.selectedPhoto = this.claim.photos[0].src;
  }

  ngOnInit(): void {}

  changeBetweenPhotoAndMap(): void {
    this.isPhotoSelected = !this.isPhotoSelected;
  }

  changeSelectedPhoto(event: string): void {
    console.log(event);
    this.selectedPhoto = this.claim.photos.find((p) => p.id === event)?.src;
  }
}
