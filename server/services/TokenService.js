import jwt from 'jsonwebtoken';
class TokenService {
    create_token (username) {
        return jwt.sign({username: username}, process.env.TOKEN_SK, {expiresIn: '1h'});
    }

    verify_token (token) {
        const check_token = jwt.verify(token, process.env.TOKEN_SK);

        if(!check_token) {
            return false
        }
        return check_token
    }
}

export default new TokenService();
