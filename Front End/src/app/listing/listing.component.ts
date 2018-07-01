import { Component, OnInit } from '@angular/core';
import { DALService} from '../dal.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  users: Object;

  test = "asdad";

  constructor(private data: DALService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users = data 
    )
  }

}
