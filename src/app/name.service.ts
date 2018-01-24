import { Injectable, EventEmitter } from '@angular/core';
import { NameEntry } from './entities';

@Injectable()
export class NameService {
  public static nameEntries: NameEntry[] = [];
  private nameEntriesIdGenerator = 0;
  public imported: boolean;
  dataLoaded: EventEmitter<void> = new EventEmitter();

  constructor() {


  }

  public addNameEntry(nameEntry: NameEntry): number {
    const nameEntryToAppend: NameEntry = nameEntry;
    nameEntryToAppend.id = this.nameEntriesIdGenerator++;
    NameService.nameEntries.push(nameEntryToAppend);
    console.log(NameService.nameEntries);
    return nameEntryToAppend.id;
  }

  public findNameEntry(id: number): NameEntry {
    return NameService.nameEntries.find(nE => nE.id === id);
  }

  public getAllNameEntries(): NameEntry[] {
    return NameService.nameEntries.sort((e1, e2) => e1.timestamp < e2.timestamp ? -1 : 1);
  }

}
