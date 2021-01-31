import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {

  public headerTitle = '';

  constructor(
    private navController: NavController,
  ) { }
  ngOnInit() { }

  @Input() set title(val: string) {
    this.headerTitle = (val !== undefined && val !== null) ? val : null;
  }

  goBack() {
    this.navController.back();
  }
}
