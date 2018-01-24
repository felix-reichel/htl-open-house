import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NameService } from '../name.service';
import { NameEntry } from '../entities';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('nameEntryInput') nameEntryInput: ElementRef;

  constructor(private service: NameService, private router: Router) { }

  ngOnInit() {
  }

  private onCalculateClicked(nameEntryInput): void {
    let name: String = this.nameEntryInput.nativeElement.value;
    name = name.toUpperCase();
    if (name) {
      const newNameEntry = new NameEntry(name);
      console.log('Name wurde eingegen: ' + name);
      const id: number = this.service.addNameEntry(newNameEntry);
      this.onNameEntryAdded(name);
    } else {
      alert('Bitte geben Sie einen Namen ein!');
    }

  }
  onAddNewNameEntry(name: String): void {

  }

  onNameEntryAdded(name: String): void {
    this.router.navigate(['details'], { queryParams : { nameEntry: name }});
  }

}
