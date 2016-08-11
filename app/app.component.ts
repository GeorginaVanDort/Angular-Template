import { Component} from 'angular2/core';
import { ModelListComponent } from './model-list.component'
import { Model } from './model.model'

@Component({
  selector: 'my-app',
  directives: [ModelListComponent],
  template: `
  <div class="container">
    <h1>Skeleton Angular2 App!</h1>
    <model-list [modelList]="models" (onModelSelect)="modelWasSelected($event)"></model-list>
  </div>
  `
})

export class AppComponent {
  public models: Model[];
  constructor(){
    this.models = [
      new Model('Create app with List and check-off functionality', 0),
      new Model('Learn Jeet Kun Do.', 1),
      new Model('Rewatch all the Inception movies.', 2),
      new Model('Do the laundry.', 3)
    ];
  }
  modelWasSelected(clickedModel: Model): void {
    console.log("this works", clickedModel);
  }
}
