import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable,of } from 'rxjs'
import {Post} from '../Post'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private apiUrl = "http://localhost:3000/posts"
  constructor(private http: HttpClient) { }
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl)
  }
  addPost(post:Post) : Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post, httpOptions)
  }
  deleteTask(item: Post) : Observable<Post> {
    const url = `${this.apiUrl}/${item.id}`
    return this.http.delete<Post>(url)
  }
}
