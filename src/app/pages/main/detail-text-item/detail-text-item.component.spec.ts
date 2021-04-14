import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTextItemComponent } from './detail-text-item.component';

describe('DetailTextItemComponent', () => {
  let component: DetailTextItemComponent;
  let fixture: ComponentFixture<DetailTextItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTextItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTextItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
