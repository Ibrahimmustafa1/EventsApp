import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseSessionComponent } from './collapse-session.component';

describe('CollapseSessionComponent', () => {
  let component: CollapseSessionComponent;
  let fixture: ComponentFixture<CollapseSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapseSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
