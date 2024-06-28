import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPublicationsComponent } from './last-publications.component';

describe('LastPublicationsComponent', () => {
  let component: LastPublicationsComponent;
  let fixture: ComponentFixture<LastPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastPublicationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
