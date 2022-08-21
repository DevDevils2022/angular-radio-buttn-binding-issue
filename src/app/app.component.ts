import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isSubmitted = false;
  genders = [
    {
      name: 'gender',
      labelQuestionId: 282,
      questions: 'TATA',
      subQuestion: [
        {
          subQuestionId: 289,
          subQuestionLable: 'Nexan',
          subQuestionValue: 'Nexan',
          status: 'Active',
          type: null,
        },
        {
          subQuestionId: 288,
          subQuestionLable: 'Altroz VDI',
          subQuestionValue: 'VDI',
          status: 'Active',
          type: null,
        },
      ],
      status: 'Active',
      type: null,
    },
    {
      name: 'gender',
      labelQuestionId: 320,
      questions: 'LPG',
      subQuestion: [],
      status: 'Active',
      type: null,
    },
  ];
  selectedRd = {
    name: 'gender',
    labelQuestionId: 320,
    questions: 'LPG',
    subQuestion: [],
    status: 'Active',
    type: null,
  };
  constructor(public fb: FormBuilder) {}

  /*########### Form ###########*/
  registrationForm = this.fb.group({
    gender: ['', [Validators.required]],
  });

  // Getter method to access form control
  get myForm() {
    return this.registrationForm.get('gender');
  }

  // Submit Registration Form
  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.registrationForm.value));
      return;
    }
  }
}
