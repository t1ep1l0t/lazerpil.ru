import jwt from 'jsonwebtoken';
// import * as dotenv from 'dotenv';
class TokensService {
    create_access_token (user) {
        return jwt.sign(user, process.env.TOKEN_SK);
    }
    create_refresh_token (user) {
        return jwt.sign(user, process.env.TOKEN_SK);
    }
}

export default new TokensService;