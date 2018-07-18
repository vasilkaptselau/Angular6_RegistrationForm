import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  @ViewChild('form') form: NgForm;
  answers = [{
    type: 'yes',
    text: 'Yes'
  }, {
    type: 'no',
    text: 'No'
  }];

  defaultAnswer = 'yes';
  formData = {};
  isSubmited = false;

  addRandomPassword() {
    const randPassword = 'EA<7!=R5et~fv<N2';
    this.form.form.patchValue({
      user: {
        password: randPassword
      }
    });

  }

  submitForm() {
    this.isSubmited = true;
    this.formData = this.form.value;
    this.form.reset();
    console.log('Form Submited!', this.form);
  }
}
