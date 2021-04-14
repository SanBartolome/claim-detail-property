import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { PhotoDetail } from 'src/app/core/domain/photo-detail.model';

@Component({
  selector: 'app-images-reel-item',
  templateUrl: './images-reel-item.component.html',
  styleUrls: ['./images-reel-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesReelItemComponent implements OnInit {
  @Input() image!: PhotoDetail;
  @Output() selectedImage: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectImage(): void {
    this.selectedImage.emit(this.image.id);
  }
}
