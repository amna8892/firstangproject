import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Tvshow } from '../tvshow';
import { ThemoviedbService } from '../themoviedb.service';

@Component({
  selector: 'app-tvshow-details',
  templateUrl: './tvshow-details.component.html',
  styleUrls: ['./tvshow-details.component.scss']
})

export class TvshowDetailsComponent implements OnInit {

  tvshow: Tvshow;

  constructor(
    private route: ActivatedRoute,
    private themoviedbService: ThemoviedbService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTvshow();
  }

  getTvshow(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.themoviedbService.getTvShow(id).subscribe(tvshow => this.tvshow = tvshow)
  }

  goBack(): void {
    this.location.back();
  }

}
