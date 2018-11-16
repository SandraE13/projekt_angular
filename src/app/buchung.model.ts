export class Buchung {

  constructor( public datum: Date,
    public von: Date,
    public bis: Date,
    public projektnummer: string,
    public kommentar: string ) {}
}
