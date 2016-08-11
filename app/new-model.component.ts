import {Component, EventEmitter} from 'angular2/core';
import {Model} from './model.model';

@Component ({
  selector: 'new-model',
  outputs: ['onSubmitNewModel'],
  template: `
  <div class="model-form">
    <h3>Create Model:</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription><br>
    <button (click)="addModel(newDescription)" class="btn-primary btn-lg add-button">Add</button>
  </div>
  `
})

export class NewModelComponent {
  public onSubmitNewModel: EventEmitter<String>;
  constructor() {
    this.onSubmitNewModel = new EventEmitter();
  }
  addModel(userDescription: HTMLInputElement){
    this.onSubmitNewModel.emit(userDescription.value);
    userDescription.value = "";
  }
}
