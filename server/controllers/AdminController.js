import AdminModel from "../models/AdminModel.js";
import * as bcrypt from 'bcrypt';
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

            const created_user =  await AdminModel.create({ username, password: hash_password });

            res.status(200).json(created_user);

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

            res.status(200).json({
                message: `Успешный вход: ${check_username.username}`
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