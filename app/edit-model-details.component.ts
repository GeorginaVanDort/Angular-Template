import {Component} from 'angular2/core';
import {Task} from './model.model';

@Component({
  selector: 'edit-model-details',
  inputs: ['model'],
  template: `
    <div class="model-form">
      <h3>Edit Description: </h3>
      <input [(ngModel)]="model.description" class="col-sm-8 input-lg model-form"/>
    </div>
  `
})

export class EditModelDetailsComponent {
  public model: Model;
}
