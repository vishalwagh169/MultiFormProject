import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms"


@Component({
  selector: 'app-multiforms',
  templateUrl: './multiforms.component.html',
  styleUrls: ['./multiforms.component.css']
})
export class MultiformsComponent implements OnInit {


  constructor(private builder: FormBuilder) { }
  isLinear = false;




  ngOnInit(): void {
  }


  StuRegister = this.builder.group({
    personaldetails: this.builder.group({
      title: this.builder.control('', Validators.required),
      firstname: this.builder.control('', Validators.required),
      lastname: this.builder.control('', Validators.required),
      gender: this.builder.control('', Validators.required),
      dob: this.builder.control('', Validators.required),
      email: this.builder.control('', Validators.required),
      mobile: this.builder.control('', Validators.required),
      pan: this.builder.control('', Validators.required),
      aadhar: this.builder.control('', Validators.required),
      collegeName: this.builder.control('', Validators.required),
      highestEducation: this.builder.control('', Validators.required),
      stream: this.builder.control('', Validators.required),
      grade: this.builder.control('', Validators.required),
      otherDegree: this.builder.control('', Validators.required),
      otherStream: this.builder.control('', Validators.required)






    }),
    employmentdetails: this.builder.group({
      lastEducation: this.builder.control('', Validators.required),
      selectedState: this.builder.control('', Validators.required),
      district: this.builder.control('', Validators.required),
      jobType: this.builder.control('', Validators.required),
      readyToRelocate: this.builder.control('', Validators.required),

      prefdistrict: this.builder.control('', Validators.required),
      workExperience: this.builder.control('', Validators.required),
      previousExperience: this.builder.control('', Validators.required),

    }),
    uploaddocuments: this.builder.group({
      // documentUpload: this.builder.control('', Validators.required),

    })


  })

  get personaldetailsform() {
    return this.StuRegister.get("personaldetails") as FormGroup;
  }

  get employmentdetailsform() {
    return this.StuRegister.get("employmentdetails") as FormGroup;
  }

  get uploaddocumentsform() {
    return this.StuRegister.get("uploaddocuments") as FormGroup;
  }
  HandleSubmit() {
    if (this.StuRegister.valid) {
      console.log(this.StuRegister.value);
    }
  }

}
