import { Component } from '@angular/core';
import { NOTES } from '../../notes';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent {
  notes = NOTES;

  show(title: String){
    alert(title);
  }
}
