import { Component } from 'angular2/core';
import { Model } from './model.model';

@Component ({
  selector: 'model-display',
  inputs: ['model'],
  template: `
    <h3>{{ model.description }}</h3>
  `
})

export class ModelComponent {
  public model: Model;
}
