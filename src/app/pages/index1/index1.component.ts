import { Location } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DoNotCallService } from "src/app/donotcall.service";
import { timer } from "rxjs";
import { DoNotCall } from "src/app/donotcall.model";
import { NotifierService } from "angular-notifier";

@Component({
  selector: "app-index1",
  templateUrl: "./index1.component.html",
  styleUrls: ["./index1.component.scss"],
})
/**
 * Index-1 component
 */
export class Index1Component implements OnInit {
  form!: FormGroup;
  isSubmitted = false;
  private readonly notifier: NotifierService;

  constructor(
    private formBuilder: FormBuilder,
    private doNotCallService: DoNotCallService,
    private location: Location,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this._initForm();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return console.log("error");
    }
    const doNotCall: DoNotCall = {
      firstName: this.doNotCallForm.firstName.value,
      lastName: this.doNotCallForm.lastName.value,
      companyName: this.doNotCallForm.companyName.value,
      phone: this.doNotCallForm.phone.value,
      email: this.doNotCallForm.email.value,
    };
    this._addDoNotCall(doNotCall);
  }

  private _initForm() {
    this.form = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      companyName: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      phone: ["", Validators.required],
    });
  }

  private _addDoNotCall(doNotCall: DoNotCall) {
    this.doNotCallService.createDoNotCall(doNotCall).subscribe(
      (doNotCall: DoNotCall) => {
        this.notifier.show({
          type: "success",
          message: "Sucessfully added to Do Not Call List",
        });
        timer(2000)
          .toPromise()
          .then(() => {
            this.isSubmitted = false;
            this.form.reset();
          });
      },
      () => {
        this.notifier.show({
          type: "error",
          message: "Was not able to add to Do Not Call List",
        });
      }
    );
  }

  get doNotCallForm() {
    return this.form.controls;
  }
}
