import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public term: string = 'amelie';
  public movies: any[];

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
  }

  search() {
    this.searchService.search(this.term).subscribe(
      (data)=>{
        console.log('c: ', data);
      }
    );
  }

}
