import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty values', () => {
    expect(component.formGroup.value).toEqual({ name: '', email: '', message: '' });
  });

  it('should mark name field as invalid if empty', () => {
    let nameControl = component.formGroup.get('name');
    nameControl?.setValue('');
    expect(nameControl?.valid).toBeFalsy();
    expect(nameControl?.errors?.['required']).toBeTruthy();
  });

  it('should mark email field as invalid if empty', () => {
    let emailControl = component.formGroup.get('email');
    emailControl?.setValue('');
    expect(emailControl?.valid).toBeFalsy();
    expect(emailControl?.errors?.['required']).toBeTruthy();
  });

  it('should mark email field as invalid if email format is incorrect', () => {
    let emailControl = component.formGroup.get('email');
    emailControl?.setValue('invalid-email');
    expect(emailControl?.valid).toBeFalsy();
    expect(emailControl?.errors?.['email']).toBeTruthy();
  });

  it('should mark message field as invalid if empty', () => {
    let messageControl = component.formGroup.get('message');
    messageControl?.setValue('');
    expect(messageControl?.valid).toBeFalsy();
    expect(messageControl?.errors?.['required']).toBeTruthy();
  });

  it('should mark form as invalid if any field is empty', () => {
    component.formGroup.setValue({ name: '', email: 'test@example.com', message: 'Test message' });
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('should mark form as valid if all fields are filled correctly', () => {
    component.formGroup.setValue({ name: 'John Doe', email: 'test@example.com', message: 'Test message' });
    expect(component.formGroup.valid).toBeTruthy();
  });
});
