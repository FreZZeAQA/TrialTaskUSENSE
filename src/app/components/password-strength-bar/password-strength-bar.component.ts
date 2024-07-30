import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-password-strength-bar',
  standalone: true,
  templateUrl: './password-strength-bar.component.html',
  styleUrls: ['./password-strength-meter.component.css'],
  imports: [CommonModule]
})
export class PasswordStrengthBarComponent implements OnChanges {
  @Input()
  password: string;
  firstSectionClass: string;
  secondSectionClass: string;
  thirdSectionClass: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['password']) {
      this.checkPasswordStrength();
    }
  }

  checkPasswordStrength(): void {
    const hasLetters = /[a-zA-Zа-яА-Я]/.test(this.password);
    const hasNumbers = /[0-9]/.test(this.password);
    const hasSymbols = /[^a-zA-Zа-яА-Я0-9]/.test(this.password);

    if (!this.password) {
      this.setSectionClasses('gray', 'gray', 'gray');
    } else if (this.password.length < 8) {
      this.setSectionClasses('red', 'red', 'red');
    } else {
      if (hasLetters && hasNumbers && hasSymbols) {
        this.setSectionClasses('green', 'green', 'green');
      } else if (
        (hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)
      ) {
        this.setSectionClasses('yellow', 'yellow', 'gray');
      } else {
        this.setSectionClasses('red', 'gray', 'gray');
      }
    }
  }

  setSectionClasses(firstSection: string, secondSection: string, thirdSection: string): void {
    this.firstSectionClass = firstSection;
    this.secondSectionClass = secondSection;
    this.thirdSectionClass = thirdSection;
  }
}
