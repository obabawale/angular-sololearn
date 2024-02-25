import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NOTES } from '../../notes';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css'
})
export class NoteDetailComponent {
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));

  note = NOTES.find((i) => i.id === this.id);

  deleteNote() {
    if(this.note){
      let index = NOTES.indexOf(this.note, 0);
      NOTES.splice(index, 1);
    }
    return this.router.navigateByUrl("");
  }
}
