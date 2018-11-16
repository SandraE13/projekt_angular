import { Component, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  @Output() featureSeleceted = new EventEmitter<string>();


  onSelect(feature: string){
    this.featureSeleceted.emit(feature);
  }

}
