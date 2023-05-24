import { Component, OnInit } from '@angular/core';
import { Yacht } from '../../types/yacht.type';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-yacht-score-details',
  templateUrl: './yacht-score-details.component.html',
  styleUrls: ['./yacht-score-details.component.css'],
})
export class YachtScoreDetailsComponent implements OnInit {
  id!: string;
  yacht: Yacht = {};

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {
    this.titleService.setTitle('Yacht Score Details');
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.api
        .get({ path: `api/yacht/${this.id}` })
        .subscribe((result) => (this.yacht = result));
    }
  }
}
