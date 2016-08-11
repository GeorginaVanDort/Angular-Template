import { Component} from 'angular2/core';
import { ModelListComponent } from './model-list.component'
import { Model } from './model.model'

@Component({
  selector: 'my-app',
  directives: [ModelListComponent],
  template: `
  <div class="container">
    <h1>Skeleton Angular2 App!</h1>
    <model-list  ></model-list>
  </div>
  `
})

export class AppComponent {
  public model: Model[];
  constructor(){
    this.models = [
      new Model()
    ];
  }
  modelWasSelected(clickedModel: Model): void {
    console.log("this works", clickedModel);
  }
}
