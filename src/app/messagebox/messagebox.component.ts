
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrls: ['./messagebox.component.css']
})
export class MessageboxComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }


}
