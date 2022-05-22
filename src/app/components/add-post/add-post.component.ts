import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Post} from "../../Post"
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  @Output() onAddPost: EventEmitter<Post> = new EventEmitter
  title!: string
  author!: string

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    if(!this.title){
      alert('Please add a post')
      return
    }
    const newPost = {
      title: this.title,
      author: this.author
    }
    this.onAddPost.emit(newPost)
    this.title = ''
    this.author = ''

  }
}
