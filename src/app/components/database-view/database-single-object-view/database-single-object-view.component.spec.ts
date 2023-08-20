import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseSingleObjectViewComponent } from './database-single-object-view.component';

describe('DatabaseSingleObjectViewComponent', () => {
  let component: DatabaseSingleObjectViewComponent;
  let fixture: ComponentFixture<DatabaseSingleObjectViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseSingleObjectViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseSingleObjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
