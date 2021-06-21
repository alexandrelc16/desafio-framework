import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts.service';
import { UsersService } from 'src/app/core/services/users.service';
import { Posts } from 'src/app/model/posts.interface';
import { Users } from 'src/app/model/users.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
  
  posts: Posts[];
  users: Users[];
  completePosts: {post: Posts, user: Users}[] = [];

  constructor(
    private postsService: PostsService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.showPosts();
  }

  private showPosts() {
    this.postsService.getPosts()
      .subscribe(
        (data: Posts[]) => {
          this.posts = data;
          this.getUsers();
        },
        (error) => console.log(error)
      );
  }

  private getUsers() {
    this.usersService.getUsers()
      .subscribe(
        (data: Users[]) => {
          this.users = data;
          this.setCompletePosts();
        },
        (error) => console.log(error)
      );
  }

  private setCompletePosts() {
    this.users.map(user => 
      this.posts.map(post => {
        if (post.userId === user.id)
          this.completePosts.push({
            post: post,
            user: user
          })
      })
    );
  }
}
