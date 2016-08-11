import { Pipe, PipeTransform } from 'angular2/core';
import { Model } from './model.model';

@Pipe ({
  name: "generic",
  pure: true
})

export class GenericPipe implements PipeTransform {
  transform(input: Model[], info) {
    var desiredGenerickness = info[0];
    var output: Model[] = [];
    if (desiredGenerickness === "notDone") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === false) {
          output.push(input[i]);
        }
      }
    return output;
  } else if (desiredGenerickness === "isDone") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].done === true) {
        output.push(input[i]);
      }
    }
      return output;
    } else {
      return input;
    }
  }
}
