import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Post} from "../../Post"
import {POSTS} from "../../mock-tasks"
import {BookServiceService} from "../../services/book-service.service"
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  // @Input() posts: Post[]|undefined\
  posts: Post[]=POSTS
  // posts: Post[] = []
  faTimes = faTimes
  faCoffee = faCoffee
  @Input() item: Post| undefined

  constructor(private bookServiceService: BookServiceService, library: FaIconLibrary) { library.addIcons(faCoffee) }

  ngOnInit(): void {
    this.bookServiceService.getPosts().subscribe((posts) =>{
      this.posts = posts
      console.log("posts is:", posts)
    })
  }

}
