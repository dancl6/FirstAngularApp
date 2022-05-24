import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Post} from "../../Post"
import {POSTS} from "../../mock-tasks"
import {BookServiceService} from "../../services/book-service.service"
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
 @Input() item: Post| undefined
 @Output() onDeleteTask: EventEmitter<Post> = new
 EventEmitter()
 posts : Post[] = POSTS
 faTimes = faTimes
 @Input() flag: boolean = true
 @Input() text: string|undefined;
  constructor(private bookServiceService: BookServiceService) { }

  ngOnInit(): void {
    this.bookServiceService.getPosts().subscribe((posts) => (this.posts = posts))
  }



  onDelete(item:any) {
    this.onDeleteTask.emit(item)
  }
}
