import { Injectable } from '@angular/core';
import { INote } from './notes.model';

@Injectable({
    providedIn: 'root',
})
export class NotesService {
    notes = [];
    constructor() {}

    clearLocalStorage() {
        localStorage.clear();
    }

    saveToLocalStorage(notes: any[]) {
        this.clearLocalStorage();
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    getNotes() {
        this.notes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
        return this.notes;
    }

    addNote(note: INote) {
        note.id = this.notes ? this.notes.length + 1 : 1;
        this.notes.push(note);
        this.saveToLocalStorage(this.notes);
        console.log(this.notes);
    }

    countNotes() {
        return this.notes.length;
    }

    updateNote(note: INote) {
        const index = this.notes.findIndex(x => x.id === note.id);
        this.notes[index] = note;
        this.saveToLocalStorage(this.notes);
    }

    deleteNote(id: number) {
        const index = this.notes.findIndex(note => note.id === id);
        this.notes.splice(index, 1);
        this.saveToLocalStorage(this.notes);
    }
}
