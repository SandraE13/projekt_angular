import { Injectable } from '@angular/core';
import {Buchung} from './buchung.model';

@Injectable({
  providedIn: 'root'
})
export class BuchungService {
  private Buchungen: Buchung[] = [];
  constructor() {
  }
  addBuchung(buchung: Buchung) {
    this.Buchungen.push(buchung);
    console.log(this.Buchungen);
  }
  getBuchung(index: number) {
    return this.Buchungen[index];
  }
  deleteBuchung(index: number) {
    this.Buchungen.splice(index, 1);
  }
  updateBuchung(index: number, updateBuchung: Buchung){
    this.Buchungen[index] = updateBuchung;
  }
  getBuchungen() {
    return this.Buchungen.slice();
  }
}
