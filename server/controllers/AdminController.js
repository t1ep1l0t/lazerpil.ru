import AdminModel from "../models/AdminModel.js";
import * as bcrypt from 'bcrypt';
import TokenService from "../services/TokenService.js";
class AdminController {
    async register (req, res) {
        try {
            const { username, password } = req.body;

            const check_username = await AdminModel.findOne({username: username});
            if (check_username) {
                return res.status(400).json({
                    message: 'Администратор с таким именем пользователя уже существует.'
                })
            }

            const hash_password = bcrypt.hashSync(password, 5);

            const token = TokenService.create_token(username);

            const created_user =  await AdminModel.create({
                username: username,
                password: hash_password,
                token: token
            });

            res.status(200).json({admin: created_user});

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'На стороне сервера произошла ошибка.'
            })
        }
    }

    async login (req, res) {
        try {
            const {username, password} = req.body;

            const check_username = await AdminModel.findOne({username: username});
            if(!check_username) {
                return res.status(401).json({
                    message: 'Имя пользователя не найдено'
                })
            }

            const check_password = bcrypt.compareSync(password, check_username.password);
            if(!check_password) {
                return res.status(401).json({
                    message: 'Не верный пароль'
                })
            }

            const token = TokenService.create_token(username);

            check_username.token = token;

            await check_username.save();

            res.status(200).json({
                message: `Успешный вход: ${check_username.username}`,
                admin: check_username
            })

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Ошибка на стороне сервера.'
            })
        }
    }

    async check_token (req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1];

            if(!token) {
                return res.status(401).json({
                    message: 'Срок сесии истек, авторизуйтесь заново.'
                })
            }

            const verify_token = TokenService.verify_token(token);

            if(!verify_token) {
                return res.status(401).json({
                    message: 'Токен сесии не валиден, авторизуйтесь заново.'
                })
            }

            const admin = await AdminModel.findOne({username: verify_token.username});

            const new_token = TokenService.create_token(verify_token.username);

            admin.token = new_token;

            await admin.save();

            res.status(200).json({
                message: 'Сесия успешно обновлена',
                admin: admin
            })

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Ошибка на стороне сервера.'
            })
        }
    }
}

export default new AdminController;