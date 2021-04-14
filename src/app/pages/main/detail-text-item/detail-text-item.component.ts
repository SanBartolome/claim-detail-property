import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-detail-text-item',
  templateUrl: './detail-text-item.component.html',
  styleUrls: ['./detail-text-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailTextItemComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  constructor() {}

  ngOnInit(): void {}
}
