import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  title: string;
  content: string;
  loveIts: number;
  createdAt: Date;
  constructor() { }

}
