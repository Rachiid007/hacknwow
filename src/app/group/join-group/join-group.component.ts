import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.css'],
})
export class JoinGroupComponent {
  constructor(private route: ActivatedRoute) {}

  groupId!: number;

  ngOnInit() {
    this.groupId = +this.route.snapshot.params['id'];
  }
}
