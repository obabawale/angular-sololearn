import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NoteListComponent } from './note-list/note-list.component';
import { AddNoteComponent } from './add-note/add-note.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NoteListComponent, AddNoteComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Notes';
  imageUrl = "https://www.sololearn.com/images2/tree.jpg"
  alt = "Tree image"
}
