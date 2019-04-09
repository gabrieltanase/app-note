import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { INote } from '../shared/notes.model';
import { NotesService } from '../shared/notes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';

@Component({
    selector: 'app-note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
    @Input() note: INote;
    editMode = false;
    editNoteForm: FormGroup;

    constructor(private noteService: NotesService, public dialog: MatDialog) {}

    ngOnInit() {}

    initEditFormValues() {
        this.editNoteForm = new FormGroup({
            title: new FormControl(this.note.title, Validators.required),
            description: new FormControl(this.note.description, Validators.required),
        });
    }

    delete(id) {
        /** Implement confirmation modal */
        const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
            panelClass: 'delete-note-modalbox',
        });

        dialogRef.afterClosed().subscribe(result => {
            if (!result) {
                return;
            }
            this.noteService.deleteNote(id);
        });
    }

    updateNote(formValues) {
        this.note.title = formValues.title;
        this.note.description = formValues.description;
        this.noteService.updateNote(this.note);
        this.editMode = false;
    }

    toggleEditMode() {
        this.editMode = !this.editMode;

        if (this.editMode) {
            this.initEditFormValues();
        }
    }
}
