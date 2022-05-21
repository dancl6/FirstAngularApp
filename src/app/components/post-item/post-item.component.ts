import { Component, Input, OnInit } from '@angular/core';
import {Post} from "../../Post"
import {BookServiceService} from "../../services/book-service.service"
@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
 @Input() item: Post| undefined
  constructor() { }

  ngOnInit(): void {
    
  }

}
