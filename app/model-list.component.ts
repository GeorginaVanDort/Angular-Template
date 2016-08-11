import { Component, EventEmitter} from 'angular2/core';
import { ModelComponent } from './model.component';
import { EditModelDetailsComponent } from './edit-model-details.component';
import { NewModelComponent} from './new-model.component';
import { Model} from './model.model';
import { GenericPipe } from './generic.pipe';

// directives populate the template with their own selector/template
@Component({
  selector: 'model-list',
  inputs: ['modelList'],
  outputs: ['onModelSelect'],
  directives: [ModelComponent, EditModelDetailsComponent, NewModelComponent],
  pipes: [GenericPipe],
  template:`
  <select (change)="onChange($event.target.value)">
    <option value="all">Show All Models</option>
    <option value="isDone">Show Done Models</option>
    <option value="notDone" selected="selected">Show Not Done Models</option>
  </select>
  <model-display *ngFor="#currentModel of modelList | generic:selectedPipe"
  (click)="modelClicked(currentModel)"
  [class.selected]="currentModel === selectedModel"
  [model]="currentModel">
  </model-display>
  <edit-model-details *ngIf="selectedModel" [model]="selectedModel"></edit-model-details>
  <new-model (onSubmitNewModel)="createModel($event)"></new-model>
  `
})

export class ModelListComponent {
  public modelList: Model[];
  public onModelSelect: EventEmitter<Model>;
  public selectedPipe: string = "";
  public selectedModel: Model;
  constructor(){
    this.onModelSelect = new EventEmitter();
  }
  modelClicked(clickedModel: Model): void {
    console.log('child', clickedModel);
    this.selectedModel = clickedModel;
    this.onModelSelect.emit(clickedModel);
  }
  createModel(description: string): void {
    this.modelList.push(
      new Model(description, this.modelList.length)
    );
  }
  onChange(optionFromDropDownMenu) {
    this.selectedPipe = optionFromDropDownMenu;
    console.log(this.selectedPipe);
  }
}
