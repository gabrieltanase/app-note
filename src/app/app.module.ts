import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NewNoteComponent } from './notes/new-note/new-note.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { NoteComponent } from './notes/note/note.component';
import { DeleteConfirmationComponent } from './notes/note/delete-confirmation/delete-confirmation.component';

@NgModule({
    declarations: [AppComponent, NewNoteComponent, NotesListComponent, NoteComponent, DeleteConfirmationComponent],
    imports: [BrowserModule, ReactiveFormsModule, BrowserAnimationsModule, MatDialogModule],
    providers: [],
    entryComponents: [DeleteConfirmationComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
