import { Injectable, EventEmitter } from '@angular/core';
import { NameEntry } from './entities';

@Injectable()
export class NameService {
  private static nameEntries: NameEntry[];
  public imported: boolean;
  dataLoaded: EventEmitter<void> = new EventEmitter();

  constructor() {


  }

  public addNameEntry(nameEntry: NameEntry) {
    NameService.nameEntries.push(nameEntry);
  }

  public findNameEntry(id: number) {
    return NameService.nameEntries.find(nameEntry => nameEntry.id === id);
  }

  public getAllNameEntries(): NameEntry[] {
    return NameService.nameEntries.sort((e1, e2) => e1.timestamp < e2.timestamp ? -1 : 1);
  }

}
