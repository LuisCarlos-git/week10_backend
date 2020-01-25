const Dev = require('../models/Dev');
const ParseString = require('../utils/parseStirngAsArray')


module.exports = {
    async index(req, res){
        const { latitude, longitude, techs } = req.query;
        
        const techsArray = ParseString(techs);
        
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },

            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [ longitude, latitude ],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return res.json({devs})
    }
}