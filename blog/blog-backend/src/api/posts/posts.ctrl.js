import Post from '../../models/post';
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx, next) => {
	// 클라이언트에서 잘못된 id 를 보냈는지 확인하는 코드
	const { id } = ctx.params;
	if (!ObjectId.isValid(id)) {
		ctx.status = 400; // bad request
		return;
	}
	return next();
};
/*
 POST /api/posts
 {
	title:"제목",
	body:"내용",
	tags:["태그1", "태그2"]
 }
 */

export const write = async (ctx) => {
	const { title, body, tags } = ctx.request.body;
	// 인스턴스 객체 생성
	const post = new Post({
		title,
		body,
		tags,
	});
	try {
		await post.save(); // return Promise Object
		ctx.body = post;
	} catch (err) {
		ctx.throw(500, err);
	}
};
/*
	GET /api/posts
*/
export const list = async (ctx) => {
	try {
		const posts = await Post.find().exec();
		ctx.body = posts;
	} catch (err) {
		ctx.throw(500, err);
	}
};

/*
	GET /api/posts/:id
*/
export const read = async (ctx) => {
	const { id } = ctx.params;
	try {
		const post = await Post.findById(id).exec();
		if (!post) {
			ctx.status = 404; // 없으면 Not Found
			return;
		}
		ctx.body = post;
	} catch (err) {
		ctx.throw(500, err);
	}
};

/*
	DELETE /api/posts/:id
*/
export const remove = async (ctx) => {
	const { id } = ctx.params;
	try {
		await Post.findByIdAndRemove(id).exec();
		ctx.status = 204; // No Content  ( 성공했지만 응답할 데이터는 없음 )
	} catch (err) {
		ctx.throw(500, err);
	}
};

/*
	PATCH /api/posts/:id
	{
		title:"수정",
		body:"수정 내용",
		tags:["수정","태그"]
	}
*/
export const update = async (ctx) => {
	const { id } = ctx.params;
	try {
		const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
			new: true, // true 이면 업데이트 된 데이터를 반환. false 이면 업데이트 전의 데이터를 반환
		}).exec();
		if (!post) {
			ctx.status = 404;
			return;
		}
		ctx.body = post;
	} catch (err) {
		ctx.throw(500, err);
	}
};
