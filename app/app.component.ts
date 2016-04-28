import {Component} from 'angular2/core';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {GitHubProfileComponent} from './github-profile.component';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 HTTP App</h1>
    <div *ngIf="isLoading">
    	<i class="fa fa-spinner fa-spin fa-3x"></i>
    </div>
    <github-profile></github-profile>
    `,
    directives:[GitHubProfileComponent],
    providers:[PostService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit{
	isLoading = true;

	constructor(private _postService: PostService){
		//this._postService.createPost({userId: 1, title: "my post",body: "nice post"})
	}

	ngOnInit(){
		this._postService.getPosts()
		.subscribe(posts => {
		this.isLoading = false;
		console.log(posts[0].title)
		});
	}
 }