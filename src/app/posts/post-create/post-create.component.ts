import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from './../posts.service';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
    entreredTitle = '';
    entrerdContent = '';

    onAddPost(form: NgForm) {
      if (form.invalid) {
        return;
    }
      const post = {title: form.value.title, content: form.value.content};
      this.postsService.addPost(form.value.title, form.value.content);
    }

    constructor(public postsService: PostsService) {
    }

    ngOnInit(): void {
    }
}
