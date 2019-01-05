import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-comfirm-dialog',
  template: `
    <h2 md-dialog-title>{{ title }}</h2>
    <div md-dialog-content>
      {{ content }}
    </div>
    <div md-dialog-actions>
      <button type="button" md-raised-button color="primary" (click)="onClick(true)">保存</button>
      <button type="button" md-dialog-close md-button (click)="onClick(false)">关闭</button>
    </div>
  `,
  styles: []
})
export class ComfirmDialogComponent implements OnInit {

  title = '';
  content = '';
  constructor(
    private dialogRef: MdDialogRef<ComfirmDialogComponent>,
    @Inject(MD_DIALOG_DATA) private data  
  ) { }

  ngOnInit() {
    this.title = this.data.title;
  }

  onClick(result: boolean) {
    this.dialogRef.close(result);
  }

}
