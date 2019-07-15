import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: PostModel;

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if (this.post.loveIts > 0) {
      return 'green';
    } else if (this.post.loveIts < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }

  onClickLove() {
    this.post.loveIts++;
  }

  onClickDontLove() {
    this.post.loveIts--;
  }

}
