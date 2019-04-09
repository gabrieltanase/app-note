import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-delete-confirmation',
    templateUrl: './delete-confirmation.component.html',
    styleUrls: ['./delete-confirmation.component.scss'],
})
export class DeleteConfirmationComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<DeleteConfirmationComponent>) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {}
}
