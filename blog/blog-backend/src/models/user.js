import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
	username: String,
	hashedPassword: String,
});

// 인스턴스 메서드를 작성할때는 화살표함수가 아닌 function 키워드를 사용해야 함
// 함수내부에서 this 에 접근해야 하기 떄문, this 는 문서 인스턴스
UserSchema.methods.setPassword = async function (password) {
	const hash = await bcrypt.hash(password, 10);
	this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
	const result = await bcrypt.compare(password, this.hashedPassword);
	return result; // true | false
};

const User = mongoose.model('User', UserSchema);

export default User;
