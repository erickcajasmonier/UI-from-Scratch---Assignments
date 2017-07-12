import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';
import { UtilService } from './services/util.service';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  url = 'https://github.com/jcyovera/UIFromScratch';
  title: string;

  constructor(private api: ApiService, private utilService: UtilService) {
    this.title = this.api.title;
  }
}
