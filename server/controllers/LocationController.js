import LocationModel from "../models/LocationModel.js";
import LocationFileService from "../services/LocationFileService.js";

class LocationController {
    async add_one (req, res) {
        try {
            const {metro, address, color, coords} = req.body;

            const {entrance, equip, interior, result, service} = req.files;

            const check_address = await LocationModel.findOne({address: address});
            if(check_address) {
                return res.status(400).json({
                    message: 'Ошибка. Локация с таким адресом уже существует.'
                })
            }

            const check_coords = await LocationModel.findOne({coords: coords});
            if(check_coords) {
                return res.status(400).json({
                    message: 'Ошибка. Локация с такими координатами уже существует.'
                })
            }

            let  entrance_picture, equip_picture, interior_picture, result_picture, service_picture;

            if (entrance) {
                if (entrance.length > 1) {
                    entrance_picture = [];
                    entrance.forEach(picture => {
                        const pictures = LocationFileService.saveFile('../client/static/entrance/', picture);
                        entrance_picture.push(pictures);
                    });
                } else {
                    entrance_picture = LocationFileService.saveFile('../client/static/entrance/', entrance);
                }
            }
            if (equip) {
                if (equip.length > 1) {
                    equip_picture = [];
                    equip.forEach(picture => {
                        const pictures = LocationFileService.saveFile('../client/static/equip/', picture);
                        equip_picture.push(pictures);
                    });
                } else {
                    equip_picture = LocationFileService.saveFile('../client/static/equip/', equip);
                }
            }
            if (interior) {
                if (interior.length > 1) {
                    interior_picture = [];
                    interior.forEach(picture => {
                        const pictures = LocationFileService.saveFile('../client/static/interior/', picture);
                        interior_picture.push(pictures);
                    })
                } else {
                    interior_picture = LocationFileService.saveFile('../client/static/interior/', interior);
                }
            }
            if (result) {
                if (result.length > 1) {
                    result_picture = [];
                    result.forEach(picture => {
                        const pictures = LocationFileService.saveFile('../client/static/result/', picture);
                        result_picture.push(pictures);
                    })
                } else {
                    result_picture = LocationFileService.saveFile('../client/static/result/', result);
                }
            }
            if (service) {
                if (service.length > 1) {
                    service_picture = [];
                    service.forEach(picture => {
                        const pictures = LocationFileService.saveFile('../client/static/service/', picture);
                        service_picture.push(pictures);
                    })
                } else {
                    service_picture = LocationFileService.saveFile('../client/static/service/', service);
                }
            }

            const new_location = await LocationModel.create({
                metro,
                address,
                color,
                coords,
                entrance: entrance_picture,
                equip: equip_picture,
                interior: interior_picture,
                result: result_picture,
                service: service_picture
            });

            res.status(200).json(new_location);

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Произошла ошибка на стороне сервера пожалуйста попробуйте позже.'
            });
        }
    }
    async get_all (req, res) {
        try {
            const locations = await LocationModel.find();

            res.status(200).json(locations);

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Произошла ошибка на стороне сервера пожалуйста попробуйте позже.'
            });
        }
    }
    async get_one (req, res) {
        try {
            const id = req.params.id;

            const check_id = await LocationModel.findById(id);
            if(!check_id) {
               return res.status(400).json({
                    message: 'Локация стаким id не найдена.'
                });
            }

            res.status(200).json(check_id);

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Произошла ошибка на стороне сервера пожалуйста попробуйте позже.'
            });
        }
    }
    async update_one (req, res) {
        try {
            const {metro, address, color, coords} = req.body;
            const id = req.params.id;
            const {entrance, equip, interior, result, service} = req.files;

            const check_location = await LocationModel.findOne({_id: id});
            if(!check_location) {
                return res.status(401).json({
                    message: 'Локация с таким id найдена'
                })
            }

            let  entrance_picture, equip_picture, interior_picture, result_picture, service_picture;

            if (entrance) {
                if (entrance.length > 1) {
                    entrance_picture = [];
                    entrance.forEach(picture => {
                        const pictures = LocationFileService.saveFile('../client/pictures/entrance/', picture);
                        entrance_picture.push(pictures);
                    });
                    entrance_picture.forEach(picture => {
                        check_location.entrance.push(picture)
                    })
                } else {
                    entrance_picture = LocationFileService.saveFile('../client/pictures/entrance/', entrance);
                    check_location.entrance.push(entrance_picture)
                }
            }
            if (equip) {
                if (equip.length > 1) {
                    equip_picture = [];
                    equip.forEach(picture => {
                        const pictures = LocationFileService.saveFile('../client/pictures/equip/', picture);
                        equip_picture.push(pictures);
                    });
                    equip_picture.forEach(picture => {
                        check_location.equip.push(picture)
                    })
                } else {
                    equip_picture = LocationFileService.saveFile('../client/pictures/equip/', equip);
                    check_location.equip.push(equip_picture)
                }
            }
            if (interior) {
                if (interior.length > 1) {
                    interior_picture = [];
                    interior.forEach(picture => {
                        const pictures = LocationFileService.saveFile('../client/pictures/interior/', picture);
                        interior_picture.push(pictures);
                    })
                    interior_picture.forEach(picture => {
                        check_location.interior.push(picture)
                    })
                } else {
                    interior_picture = LocationFileService.saveFile('../client/pictures/interior/', interior);
                    check_location.interior.push(interior_picture)
                }
            }
            if (result) {
                if (result.length > 1) {
                    result_picture = [];
                    result.forEach(picture => {
                        const pictures = LocationFileService.saveFile('../client/pictures/result/', picture);
                        result_picture.push(pictures);
                    })
                    result_picture.forEach(picture => {
                        check_location.result.push(picture)
                    })
                } else {
                    result_picture = LocationFileService.saveFile('../client/pictures/result/', result);
                    check_location.result.push(result_picture)
                }
            }
            if (service) {
                if (service.length > 1) {
                    service_picture = [];
                    service.forEach(picture => {
                        const pictures = LocationFileService.saveFile('../client/pictures/service/', picture);
                        service_picture.push(pictures);
                    })
                    service_picture.forEach(picture => {
                        check_location.service.push(picture)
                    })
                } else {
                    service_picture = LocationFileService.saveFile('../client/pictures/service/', service);
                    check_location.service.push(service_picture)
                }
            }


        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Произошла ошибка на стороне сервера пожалуйста попробуйте позже.'
            });
        }
    }
    async delete_one (req, res) {
        try {
            const id = req.params.id;

            const check_id = await LocationModel.findOne({_id: id});
            if (!check_id) {
                return res.status(401).json({
                    message: 'Локация с таким id не найдена.'
                })
            }

            const { entrance, equip, interior, result, service } = check_id;

            if (entrance.length > 0) {
                entrance.forEach(picture => {
                    LocationFileService.deleteFile(`../client/static/entrance/${picture}`);
                })
            }
            if (equip.length > 0) {
                equip.forEach(picture => {
                    LocationFileService.deleteFile(`../client/static/equip/${picture}`);
                })
            }
            if (interior.length > 0) {
                interior.forEach(picture => {
                    LocationFileService.deleteFile(`../client/static/interior/${picture}`);
                })
            }
            if (result.length > 0) {
                result.forEach(picture => {
                    LocationFileService.deleteFile(`../client/static/result/${picture}`);
                })
            }
            if (service.length > 0) {
                service.forEach(picture => {
                    LocationFileService.deleteFile(`../client/static/service/${picture}`);
                })
            }

            await LocationModel.findByIdAndDelete(id);

            res.status(200).json({
                message: 'Локация успешно удалена'
            });

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Произошла ошибка на стороне сервера пожалуйста попробуйте позже.'
            });
        }
    }
    async delete_all (req, res) {
        try {

            LocationFileService.deleteFiles('../client/static/entrance/');
            LocationFileService.deleteFiles('../client/static/equip/');
            LocationFileService.deleteFiles('../client/static/interior/');
            LocationFileService.deleteFiles('../client/static/result/');
            LocationFileService.deleteFiles('../client/static/service/');

            const locations = await LocationModel.deleteMany({});

            res.json({
                message: 'Успешно удалены все локации',
                locations
            })

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Произошла ошибка на стороне сервера пожалуйста попробуйте позже.'
            });
        }
    }
}

export default new LocationController;