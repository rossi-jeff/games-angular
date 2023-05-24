import { Component, OnInit } from '@angular/core';
import { TenGrand } from '../../types/ten-grand.type';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ten-grand-score-details',
  templateUrl: './ten-grand-score-details.component.html',
  styleUrls: ['./ten-grand-score-details.component.css'],
})
export class TenGrandScoreDetailsComponent implements OnInit {
  id!: string;
  tenGrand: TenGrand = {};

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {
    this.titleService.setTitle('Ten Grand Score Details');
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.api
        .get({ path: `api/ten_grand/${this.id}` })
        .subscribe((result) => (this.tenGrand = result));
    }
  }
}
