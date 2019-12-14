const User = require('../models/User')
const Spot = require('../models/Spot')

module.exports = {

    async index(req, res) {
        const { tech } = req.query;

        //  Ele compara os elementos do arrya [ techs ] com base 
        // no que é passado na querystring [ tech ]
        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

    async store(req, res) {

        // console.log(req.body);
        // console.log(req.file);    

        const { filename } = req.file; // Requisição por corpo para files
        const { company, techs, price } = req.body; // Requisição por corpo para company, techs, price
        const { user_id } = req.headers; // Requisição por header para autenticação do usuário

        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User does not exists' });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()), // Aqui pegamos os valores do retorno de ->>> techs: 'Node.js, React, React Native'
            price
        });
        // O .trim() pega somente a string sem espaços a mais

        return res.json(spot)
    }
};