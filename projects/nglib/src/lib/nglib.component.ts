import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-nglib',
  template: `
    <p>
      Hello from Angular Kenya!
    </p>
  `,
  styles: [
  ]
})
export class NglibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
