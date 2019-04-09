import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes/shared/notes.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(private notesService: NotesService) {}

    countNote() {
        return this.notesService.countNotes();
    }
    ngOnInit() {}
}
