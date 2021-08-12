import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdctService } from '../Services/prodct.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  closeResult = '';
  loginMode: boolean = true;
  registerForm!: FormGroup;
  signinForm!: FormGroup;
  submitted = false;
  Userdata: any[] = [];
  constructor(private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private router: Router,
    private product: ProdctService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      conformPassword: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.signinForm = this.formBuilder.group({
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });
  }


  get f() { return this.registerForm.controls }
  get f1() { return this.signinForm.controls }




  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onModeSwitch() {
    this.loginMode = !this.loginMode
  }

  signin() {
    this.submitted = true;
    this.product.getUSers().subscribe(
      data => {
        console.log(data);
        this.Userdata = data
        console.log(this.Userdata);
        
      },
      err => {
        console.log(err, 'error during get user data');

      })

    let email = this.signinForm.value.Email
    let password = this.signinForm.value.Password
    console.log(this.Userdata);
    console.log(this.signinForm);
    let filter = this.Userdata.filter(f => {
      return email === f.email && password === f.password
    })
    console.log(filter.length);

  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    } else if (this.registerForm.value.password != this.registerForm.value.conformPassword) {
      alert("Conform Password Not Match ")
    } else {

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      console.log(JSON.stringify(this.registerForm.value));
      let data = this.registerForm.value

      this.product.addUSers(data).subscribe(
        data => {
          alert("User Register SuccessFully")
          console.log(data);
          this.router.navigate(['product']);
        },
        err => {
          alert('error During User Registration')
        })
    }
  }


}