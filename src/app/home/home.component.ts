import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import { NameEntry } from '../entities';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: NameService, private router: Router) { }

  ngOnInit() {
  }

  onAddNewNameEntry(name: String): void {
    // 1 zur .csv appenden
    // zum Static Array pushen
    // -> event wird emitted -> subscribe
    // Route
  }

  onNameEntryClicked(nameEntry: NameEntry): void {
    this.router.navigate(['details'], { queryParams : { nameEntryId: nameEntry.id }});
  }

}
