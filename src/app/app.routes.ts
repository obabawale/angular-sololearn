import { Routes } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

export const routes: Routes = [
    { path: '', component: NoteListComponent },
    { path: 'new', component: AddNoteComponent },
    { path: 'note/:id', component: NoteDetailComponent },
];
