import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  subscribeForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]]
  })

  ngOnInit(): void {
  }

}
