import { Component } from '@angular/core';
import { NOTES, Note } from '../../notes';
@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent {
  notes = NOTES;

  show(title: String){
    alert(title);
  }
}
