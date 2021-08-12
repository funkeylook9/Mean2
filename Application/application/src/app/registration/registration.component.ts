import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  closeResult = '';
  loginMode: boolean = true;
  registerForm!: FormGroup;
  signinForm!: FormGroup;
  submitted = false;
  constructor(private modalService: NgbModal,
    private formBuilder: FormBuilder,
      private router: Router) { }

  ngOnInit(): void {
   
  }

  submit(login:any){
    console.log('form are submitted'+ login);
    }
}

