import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { ContactService } from '../services/contact/contact.service';
import { ContactModel } from '../model/contact-model';


@Component({
  selector: 'app-devis-produit',
  templateUrl: './devis-produit.component.html',
  styleUrls: ['./devis-produit.component.css']
})
export class DevisProduitComponent implements OnInit {

  FormData: FormGroup;
  contactEmail:ContactModel;

  constructor(private _location:Location,
    private builder: FormBuilder,
    private contact:ContactService ) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      civilite: new FormControl('', [Validators.required]),
      Nom: new FormControl('', [Validators.required]),
      Prénom: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      description: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(FormData) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }

  backClicked() {
    this._location.back();
  }

}
