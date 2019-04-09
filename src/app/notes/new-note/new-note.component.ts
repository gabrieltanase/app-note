import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotesService } from '../shared/notes.service';

@Component({
    selector: 'app-new-note',
    templateUrl: './new-note.component.html',
    styleUrls: ['./new-note.component.scss'],
})
export class NewNoteComponent implements OnInit {
    newNoteForm: FormGroup;

    constructor(private noteService: NotesService) {}

    createNewNote(note) {
        console.log(note);
        this.noteService.addNote(note);
        this.initForm();
    }

    /** Some refactor here maybe */
    initForm() {
        this.newNoteForm = new FormGroup({
            title: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
        });
    }

    ngOnInit() {
        this.initForm();
    }
}
