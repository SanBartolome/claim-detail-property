import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-generic-item',
  templateUrl: './generic-item.component.html',
  styleUrls: ['./generic-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericItemComponent implements OnInit {
  @Input() title!: string;
  @Input() descriptionTpl!: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}
}
