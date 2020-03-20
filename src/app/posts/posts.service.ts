
import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {
    private posts: Post[] = [];
    private postsUpdaded = new Subject<Post[]>();


    getPosts() {
      return [...this.posts];
    }

    getPostUpdateListener() {
        this.postsUpdaded.asObservable();
    }

    addPost(title: string, content: string) {
        const post: Post = {title: title, content: content};
        this.posts.push(post);
        this.postsUpdaded.next([...this.posts]);
    }
}
