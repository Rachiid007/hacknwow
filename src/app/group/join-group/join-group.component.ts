import { Component } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.css'],
})
export class JoinGroupComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  groupId!: number;
  groups = [
    {
      id: 1,
      name: 'Les marcheurs',
      nbrMaxOfMembers: 10,
      locality: 'Bxl',
    },
    {
      id: 2,
      name: 'Les footballeurs',
      nbrMaxOfMembers: 10,
      locality: 'Bxl',
    },
    {
      id: 3,
      name: 'Les joggeurs',
      nbrMaxOfMembers: 10,
      locality: 'Bxl',
    },
  ];

  ngOnInit() {
    this.groupId = +this.route.snapshot.params['id'];
  }

  joinGroupForm = new FormGroup({
    name: new FormControl(''),
    nbrMaxOfMembers: new FormControl(''),
    locality: new FormControl(''),
  });

  onSubmit() {
    console.log(this.joinGroupForm.value);
    // redirect to group page
    this.router.navigate(['/bravo']);
  }
}
