const Sign = require(`../models/Sign`)

module.exports = {
    async index(req, res) {

        const {name, birthdate} = req.query;

        if (!name || !birthdate) {
            console.log(name, birthdate);
            return res.status(400).json({
                message: 'Ocorreu um erro com a validação dos campos'
            })

        } else {
            console.log(name);
            const splitDate = birthdate.split(`-`);
            const parsedDate = {
                day: splitDate[0],
                month: splitDate[1]
            }
            if (parsedDate.month == 3 && parsedDate.day >= 21 || parsedDate.month == 4 && parsedDate.day <= 19) {
                return res.status(200).json({
                    starSign:`Aries`
                })


        }
    }
}