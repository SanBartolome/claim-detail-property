import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesReelComponent } from './images-reel.component';

describe('ImagesReelComponent', () => {
  let component: ImagesReelComponent;
  let fixture: ComponentFixture<ImagesReelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagesReelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesReelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
