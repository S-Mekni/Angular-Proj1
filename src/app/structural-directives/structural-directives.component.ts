import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {
  displayName = false;
  public color = '';
  public names = ['ali','assad','sami','mohammad','sameer'];
  constructor() { }

  ngOnInit() {
  }

}
