import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFormComponent implements OnInit {
  title: string = '';
  @Output() add = new EventEmitter();

  onSubmit() {
    this.add.emit(this.title);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
