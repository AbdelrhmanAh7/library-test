import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {MukDynamicFormsComponent} from "ngx-mui-kit/components/muk-dynamic-form";
import {FormControl, Validators} from "@angular/forms";
import {Filed, formControlType, IFormControl} from "ngx-mui-kit/components/muk-field-builder";
import {inputType, IPhoneNumberInput, ITextInput} from "ngx-mui-kit/components/muk-input";
import {IDropDownInput} from "ngx-mui-kit/components/muk-drop-down";
import {ButtonColors, ButtonTypes, IButton, MukButtonComponent} from "ngx-mui-kit/components/muk-button";
import {IAlert, MukAlertComponent} from "ngx-mui-kit/components/muk-alert";
import {ICard, MukCardsComponent} from "ngx-mui-kit/components/muk-cards";
import {MukThemePalette} from "ngx-mui-kit/components/muk-button/models/muk-theme-palette.type";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MukDynamicFormsComponent, MukAlertComponent, MukButtonComponent, MukCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  MUK_DEFAULT_FORM_CONTROL = {
    isAutofocus: false,
    isAutocomplete: false,
    columnSize: 12,
    controllerStyle: null,
    containerStyle: 'mb-1',
    placeholder: 'Enter your Value',
    translateLangType: null,
  };
  alignButtons = 'end';
  fields: IFormControl<Filed>[] = [
    {
      ...this.MUK_DEFAULT_FORM_CONTROL,
      controller: {
        name: 'text',
        controller: new FormControl('', Validators.required),
      },
      type: formControlType.input,
      controllerSpecification: {
        inputType: inputType.text,
      } as ITextInput,
    },
    {
      ...this.MUK_DEFAULT_FORM_CONTROL,
      rows: 5,
      columns: 5,
      controller: {
        name: 'text',
        controller: new FormControl('', Validators.required),
      },
      type: formControlType.textarea,
      controllerSpecification: {
        inputType: inputType.text,
      } as ITextInput,
    } as IFormControl<Filed>,
    {
      ...this.MUK_DEFAULT_FORM_CONTROL,
      controller: {
        name: 'date',
        controller: new FormControl('', Validators.required),
      },
      placeholder: 'Date',
      type: formControlType.date,
      controllerSpecification: {
        inputType: inputType.text,
      } as ITextInput,
    },
    {
      ...this.MUK_DEFAULT_FORM_CONTROL,
      isObservable: false,
      isDependent: true,
      dependentKey: 'id',
      isMultiple: false,
      controller: {
        name: 'role',
        label: 'Role',
        controller: new FormControl('', Validators.required),
      },
      placeholder: 'Select user role',
      type: formControlType.select,
      controllerSpecification: {
        isObservable: false,
        isDependent: true,
        dependentKey: 'id',
        isMultiple: false,
        options: [
          {name: 'Admin', value: 'Admin'},
          {
            name: 'User',
            value: 'User',
          },
        ],
        key: 'name',
        value: 'value',
      } as IDropDownInput,
    } as IFormControl<Filed>,
    {
      controller: {
        name: 'contactNumber',
        controller: new FormControl('', Validators.required),
        label: 'Contact Number',
      },
      containerStyle: 'mb-3',
      placeholder: 'Contact Number',
      type: formControlType.input,
      controllerSpecification: {
        inputType: inputType.phoneNumber,
        change: (e: any) => {
          console.log('e', e.target.value);
        },
      } as IPhoneNumberInput,
      isAutofocus: false,
      isAutocomplete: true,
      columnSize: 12,
      translateLangType: null,
      controllerStyle: null,
    } as IFormControl<Filed>,
  ];
  buttons: IButton[] = [
    {
      matType: ButtonTypes.flat,
      color: ButtonColors.primary,
      text: 'submit',
      buttonType: 'submit',
      clicked: async () => alert('submitted'),
    },
    {
      matType: ButtonTypes.flat,
      color: ButtonColors.warn,
      text: 'cancel',
      buttonType: 'button',
      clicked: async () => alert('canceled'),
    },
  ];

  onSubmit($event: any) {
    console.log('submit');
  }

  onClose($event: void) {
    console.log('close');
  }

  alert: IAlert = {
    direction: "ltr",
    panelClass: "class",
    message: "this is alert!",
    action: "Close",
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top",
  };

  cardData: ICard = {
    title: "Title",
    subtitle: "Subtitle",
    image: "https://via.placeholder.com/150",
    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc ni",
    buttons: [
      {
        text: "Button 1",
        icon: "add",
        color: 'primary',
        disabled: false,
        buttonType: "button",
        clicked: () => {
          console.log("Button 1 clicked");
        },
        matType: ButtonTypes.flat,
      },
    ],
  };
}
