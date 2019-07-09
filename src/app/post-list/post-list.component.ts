import {Component, Input, OnInit} from '@angular/core';
import {PostComponent} from '../post/post.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() postsListItems: PostComponent[];
  constructor() { }

  ngOnInit() {
  }

}
