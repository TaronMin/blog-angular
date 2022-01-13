import {Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {FormControl} from "@angular/forms";

@Directive({
  selector: '[appFormValidation]'
})
export class FormValidationDirective implements OnInit {

  @Input('appFormValidation') control!: FormControl;
  private errorMessage!: HTMLElement;
  private elementRef: ElementRef;
  isValid: boolean = true;
  errorMassageArr: HTMLElement[] = [];
  errorTexts: string[] = [];

  constructor(el: ElementRef, private renderer: Renderer2) {
    this.elementRef = el;
  }

  ngOnInit(): void {
    this.control.statusChanges.subscribe((value: string) => {
      this.initError(value);
    });
  }

  initError(value: string): void {
    if (value === "INVALID") {
      this.errorMessage = this.renderer.createElement("span");
      this.errorMessage.className = "error-message";
      for (let errorsKey in this.control.errors) {
        switch (errorsKey) {
          case "email":
            this.errorMessage.innerText = "Invalid Email";
            break
          case "required":
            this.errorMessage.innerText = "Required";
            break
          case "minlength":
            this.errorMessage.innerText = "This field must be 6 characters";
            break
        }
      }
      this.addErrorMassage(this.errorMessage);
    }
    if (value === "VALID") {
      this.errorMassageArr.forEach((err => {
        err.remove();
      }))
    }
  }

  addErrorMassage(errMassage: HTMLElement): void {
    if (this.errorMassageArr.length === 0) {
      this.errorMassageArr.push(errMassage);
      this.errorTexts.push(errMassage.innerText);
      this.elementRef.nativeElement.after(errMassage);
    } else if (!this.errorTexts.includes(errMassage.innerText)) {
      this.errorMassageArr.push(errMassage);
      this.errorTexts.push(errMassage.innerText);
      this.elementRef.nativeElement.after(errMassage);
    }
  }
}
