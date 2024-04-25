import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpTodoComponent } from './help-todo.component';

describe('HelpTodoComponent', () => {
  let component: HelpTodoComponent;
  let fixture: ComponentFixture<HelpTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelpTodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
