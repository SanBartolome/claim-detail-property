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
  selector: 'app-images-reel',
  templateUrl: './images-reel.component.html',
  styleUrls: ['./images-reel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesReelComponent implements OnInit {
  @Input() images!: PhotoDetail[];
  @Output() imageSelected: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectImage(event: string): void {
    this.imageSelected.emit(event);
  }
}
