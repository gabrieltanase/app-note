import { Component, OnInit } from '@angular/core';
import { NotesService } from '../shared/notes.service';

@Component({
    selector: 'app-notes-list',
    templateUrl: './notes-list.component.html',
    styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
    notes: any[] = [];
    constructor(private notesService: NotesService) {}

    ngOnInit() {
        this.notes = this.notesService.getNotes();
    }
}
