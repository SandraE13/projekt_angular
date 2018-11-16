import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BuchungService} from '../buchung.service';
import { Buchung } from '../buchung.model';


@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {
  constructor(private slBuchung: BuchungService) { }

  ngOnInit() {
  }

  onSaveData(form: NgForm) {
    console.log(form);

    function convertDate(str) {
      return str.replace(/(\d\d)\.(\d\d)\.(\d\d\d\d)/, '$3-$2-$1');
    }

    function convertTime(datum, time) {
      return datum.replace(/(\d\d)\.(\d\d)\.(\d\d\d\d)/, '$3-$2-$1') + ' ' + time;

    }

    const buchung: Buchung = new Buchung(
      new Date(convertDate(form.value.date)),
      new Date(convertTime(form.value.date, form.value['zeit-von'])),
      new Date(convertTime(form.value.date, form.value['zeit-bis'])),
      form.value.Projekt,
      form.value.kommentar

    );
    this.slBuchung.addBuchung(buchung);

  }
}
