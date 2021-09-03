import { IFormContactPage } from './../../interfaces/Objects/contact.interface';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConnectionService } from 'src/app/services/connection.service';
import { MyStore } from 'src/app/context/store/store';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  public contactFormGroup: FormGroup = new FormGroup({});
  public disabledSubmitButton: boolean = true;
  public language: IFormContactPage | null = null;

  constructor(private connectionService: ConnectionService) {}

  @HostListener('input') oninput() {
    // console.log(this.contactFormGroup.value);
    if (this.contactFormGroup.invalid) {
      this.disabledSubmitButton = true;
    } else {
      this.disabledSubmitButton = false;
    }
  }

  ngOnInit(): void {
    this.contactFormGroup = new FormGroup({
      name: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z]+$'),
        ])
      ),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(`^[a-zA-Z0-9\._-]+@[a-z]{3,9}(.com|.net)$`),
        ])
      ),
      msg: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_-]{0,150}$'),
        ])
      ),
    });
    this.language = MyStore.getContactPage().form;
  }

  getName(): boolean {
    if (
      this.contactFormGroup.get('name')?.invalid &&
      (this.contactFormGroup.get('name')?.dirty ||
        this.contactFormGroup.get('name')?.touched)
    ) {
      return true;
    } else {
      return false;
    }
  }

  getEmail(): boolean {
    if (
      this.contactFormGroup.get('email')?.invalid &&
      (this.contactFormGroup.get('email')?.dirty ||
        this.contactFormGroup.get('email')?.touched)
    ) {
      return true;
    } else {
      return false;
    }
  }
  getMsg(): boolean {
    if (
      this.contactFormGroup.get('msg')?.invalid &&
      (this.contactFormGroup.get('msg')?.dirty ||
        this.contactFormGroup.get('msg')?.touched)
    ) {
      return true;
    } else {
      return false;
    }
  }

  onSubmit() {
    //*cuando se tenga un backend montado
    // this.connectionService.sendMessage(this.contactFormGroup?.value).subscribe(
    //   () => {
    //     alert('Your message has been sent.');
    //     this.contactFormGroup?.reset();
    //     this.disabledSubmitButton = false;
    //   },
    //   (error: any) => {
    //     console.log('Error', error);
    //   }
    // );

    alert('Message has been sent.');
    this.contactFormGroup?.reset();
    this.disabledSubmitButton = true;
  }
}
