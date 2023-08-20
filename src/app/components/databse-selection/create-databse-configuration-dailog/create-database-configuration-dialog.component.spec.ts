import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDatabaseConfigurationDialogComponent } from './create-database-configuration-dialog.component';

describe('CreateDatabseConfigurationDailogComponent', () => {
  let component: CreateDatabaseConfigurationDialogComponent;
  let fixture: ComponentFixture<CreateDatabaseConfigurationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDatabaseConfigurationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDatabaseConfigurationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
