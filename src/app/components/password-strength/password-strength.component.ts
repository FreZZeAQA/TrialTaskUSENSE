import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {PasswordStrengthBarComponent} from '../password-strength-meter/password-strength-bar.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    PasswordStrengthBarComponent
  ],
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent implements OnInit {
  passwordForm: FormGroup;

  private _fb = inject(FormBuilder);

  ngOnInit(): void {
    this._formInit();
  }

  private _formInit(): void {
    this.passwordForm = this._fb.group({
      password: ['', Validators.required]
    });
  }

  onPasswordChange() {
    this.passwordForm.get('password')?.updateValueAndValidity();
  }
}
