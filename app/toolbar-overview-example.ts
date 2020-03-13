import {Component} from '@angular/core';

const surveys = [{
  id: 1,
  questions: [{
    question: 'Оцінка роботи менеджера ?',
    options: [
      {value: 5, label: 5},
      {value: 4, label: 4},
      {value: 3, label: 3},
      {value: 2, label: 2},
      {value: 1, label: 1},
    ],
    type: 'radio',
  },
  {
    question: 'Оцінка теннічного розрахунку TALsoft ?',
    options: [
      {value: 5, label: 5},
      {value: 4, label: 4},
      {value: 3, label: 3},
      {value: 2, label: 2},
      {value: 1, label: 1},
    ],
    type: 'radio',
  }, 
  { question: 'Оцінка роботи відділу відвантаження ?',
    options: [
      {value: 5, label: 5},
      {value: 4, label: 4},
      {value: 3, label: 3},
      {value: 2, label: 2},
      {value: 1, label: 1},
    ],
  }, 
   { question: 'Оцінка швидкості виписки рахукну ?',
      options: [
      {value: 5, label: 5},
      {value: 4, label: 4},
      {value: 3, label: 3},
      {value: 2, label: 2},
      {value: 1, label: 1},
    ],
  }, 
  /* Оцінка закомплектованого замовлення (за якістю пакування,за кількістю правильно зкомплектованих позицій, за зрозумілістю підписаних номенклатурних номерів) */

  { question: 'Оцінка швидкості виписки рахукну ?',
      options: [
      {value: 5, label: 5},
      {value: 4, label: 4},
      {value: 3, label: 3},
      {value: 2, label: 2},
      {value: 1, label: 1},
    ],
  }, 
   {
    question: 'What do you like the most about this course?',
    type: 'text'
  }, {
    question: 'What did you learn from this course that you didn\'t know before?',
    options: [
      {value: "angular", label: "Angular"},
      {value: "cli", label: "Angular CLI"},
      {value: "pwa", label: "Progressive Web Apps"},
      {value: "spa", label: "Single Page Application using Anuglar"},
      {value: "ssr", lable: "Server Side Rendering using Angular Universal"},
      {value: "monorepo", label: "Creating Mono Repo App using Nx"}
    ]
  }, {
    question: 'Whats your feedback about the course?',
    type: 'text'
  }]
}]
@Component({
  selector: 'toolbar-overview-example',
  templateUrl: 'toolbar-overview-example.html',
  styleUrls: ['toolbar-overview-example.css'],
})
export class ToolbarOverviewExample {
    seasons: number[] = [5, 4, 3, 2, 1];
    questions = surveys[0].questions;
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */