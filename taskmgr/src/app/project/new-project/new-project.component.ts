import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProjectComponent implements OnInit {

  title = '';
  constructor(
    @Inject(MD_DIALOG_DATA) private data, 
    private dislogRef: MdDialogRef<NewProjectComponent>
  ) { }

  ngOnInit() {
    this.title = this.data.title;
  }

  onClick(){
    this.dislogRef.close('I recevied your message!')
  }

}
