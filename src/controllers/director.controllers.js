const catchError = require('../utils/catchError');
const Director = require('../models/Director');
const moment = require('moment');

const getAll = catchError(async(req, res) => {
    const results = await Director.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const { birthday } = req.body;
    const date = moment(birthday);
    req.body.birthday = date.format('YYYY-MM-DDTHH:mm:ssZ');
    const result = await Director.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Director.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Director.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { birthday } = req.body;
    const date = moment(birthday);
    req.body.birthday = date.format('YYYY-MM-DDTHH:mm:ssZ');
    const result = await Director.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}