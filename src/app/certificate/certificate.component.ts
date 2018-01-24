import { Component, OnInit } from '@angular/core';
import { NameEntry } from '../entities';
import { ActivatedRoute, Params } from '@angular/router';
import { NameService } from '../name.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  private queryNameEntry: NameEntry;
  private resultSet: String[];
  private currentName: String = '';
  constructor(private service: NameService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.resultSet = this.binary_ascii(this.route.snapshot.queryParams['nameEntry']);
    this.currentName = this.route.snapshot.queryParams['nameEntry'];
    console.log(`${ this.currentName } wird zu ${ this.resultSet}`);
  }

  binary_ascii(myString: String): String[] {
    const result: String[] = [];
    for (let i = 0; i < myString.length; i++) {
      result.push(this.dec_to_bho(myString.charCodeAt(i), 'B').toString());
    }
    return result;
  }
  dec_to_bho(n, base) {
    if (n < 0) {
      n = 0xFFFFFFFF + n + 1;
    }
    switch (base) {
      case 'B':
        return parseInt(n, 10).toString(2);
      case 'H':
       return parseInt(n, 10).toString(16);
      case 'O':
        return parseInt(n, 10).toString(8);
    }
  }

}