import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMultiSelectFormComponent } from './custom-multi-select-form.component';

describe('CustomMultiSelectFormComponent', () => {
  let component: CustomMultiSelectFormComponent;
  let fixture: ComponentFixture<CustomMultiSelectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomMultiSelectFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomMultiSelectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
