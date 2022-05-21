import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Post} from "../../Post"
import {POSTS} from "../../mock-tasks"
import {UiService} from '../../services/ui.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  posts: Post[] = POSTS
  showTable : boolean = true
  // subscription: Subscription
  @Output() clickThis = new EventEmitter()
  @Input() text: string|undefined;
  @Input() item: Post| undefined
  @Input() value: boolean|undefined
  @Input() opened: boolean = true
  constructor(private uiService: UiService) { 
    // this.subscription = this.uiService
    // .onToggle()
    // .subscribe((value)=>(this.showTable = value))

  }

  ngOnInit(): void {
  }

  onClick() {
    this.clickThis.emit()
    console.log("text is:", this.text)
  }
  

}
