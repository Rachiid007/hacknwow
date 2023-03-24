import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
})
export class GroupComponent {
  constructor(private route: ActivatedRoute) {}
  activityId!: number;

  ngOnInit() {
    this.activityId = +this.route.snapshot.params['id'];
  }
}
