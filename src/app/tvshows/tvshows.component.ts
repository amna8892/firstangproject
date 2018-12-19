import { Component, OnInit } from '@angular/core';
import { Tvshow } from '../tvshow';
import { ThemoviedbService } from '../themoviedb.service';



@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {
  
  tvshows: Tvshow[];

  tvshow: Tvshow = {
    title: 'TvShowTestTitle',
    description: 'TvShowTestDescription',
    imageurl: 'testTvShowImageUrl'
  };

  constructor(private themoviedbService: ThemoviedbService) { }

  ngOnInit() {
    this.getTvshows();
  }

  getTvshows(): void{
    this.themoviedbService.getTvshows().subscribe( tvshows => this.tvshows = tvshows);
  }

}
