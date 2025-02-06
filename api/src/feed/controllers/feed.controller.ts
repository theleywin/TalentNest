import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../model/post.interface';
import { Observable } from 'rxjs';

@Controller('feed')
export class FeedController {
	constructor(private feedService: FeedService){}
	
	
	@Post()
	create(@Body()
		post: FeedPost): Observable<FeedPost>{
		return this.feedService.createPost(post);
	}
	
	@Get()
	findAll(): Observable<FeedPost[]>{
		return this.feedService.findAllPosts();
	}
	
	@Put(':id')
	update(
		@Param('id') id: number,
		@Body() post: FeedPost
	): Observable<UpdateResult>{
		return this.feedService.updatePost(id, post);
	}
	
	@Delete(':id')
	delete(
		@Param('id') id: number
	): Observable<DeleteResult>{
		return this.feedService.deletePost(id);
	}
	
}
