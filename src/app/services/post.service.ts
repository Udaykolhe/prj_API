import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// https://jsonplaceholder.typicode.com/posts
@Injectable({
  providedIn: 'root'
})
export class PostService {
private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private client : HttpClient) { }

getPosts(){
  return this.client.get(this.url);
}
}
