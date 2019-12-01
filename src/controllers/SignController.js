const Sign = require(`../models/Sign`)

module.exports = {
    async index(req, res) {

        const { name, birthdate } = req.query;

        if (!name || !birthdate) {

            return res.status(400).json({
                message: 'All parameters are required'
            })

        } else {

            const splitDate = birthdate.split(`-`);
            const parsedDate = {
                day: splitDate[0],
                month: splitDate[1]
            }

            if (parsedDate.month == 3 &&
                parsedDate.day >= 21 || parsedDate.month == 4 &&
                parsedDate.day <= 20) {
                const { starSign } = await Sign.create({
                    name,
                    birthdate: new Date(splitDate[2], splitDate[1] - 1, splitDate[0]),
                    starSign: 'Aries'
                })
                return res.status(200).json({
                    starSign
                })
            } else if (parsedDate.month == 4 &&
                parsedDate.day >= 21 || parsedDate.month == 5 &&
                parsedDate.day <= 20) {
                const { starSign } = await Sign.create({
                    name,
                    birthdate: new Date(splitDate[2], splitDate[1] - 1, splitDate[0]),
                    starSign: 'Taurus'
                })
                return res.status(200).json({
                    starSign
                })
            } else if (parsedDate.month == 5 &&
                parsedDate.day >= 21 || parsedDate.month == 6 &&
                parsedDate.day <= 20) {
                const { starSign } = await Sign.create({
                    name,
                    birthdate: new Date(splitDate[2], splitDate[1] - 1, splitDate[0]),
                    starSign: 'Gemini'
                })
                return res.status(200).json({
                    starSign
                })
            } else if (parsedDate.month == 6 &&
                parsedDate.day >= 21 || parsedDate.month == 7 &&
                parsedDate.day <= 21) {
                const { starSign } = await Sign.create({
                    name,
                    birthdate: new Date(splitDate[2], splitDate[1] - 1, splitDate[0]),
                    starSign: 'Cancer'
                })
                return res.status(200).json({
                    starSign
                })
            } else if (parsedDate.month == 7 &&
                parsedDate.day >= 22 || parsedDate.month == 8 &&
                parsedDate.day <= 22) {
                const { starSign } = await Sign.create({
                    name,
                    birthdate: new Date(splitDate[2], splitDate[1] - 1, splitDate[0]),
                    starSign: 'Leo'
                })
                return res.status(200).json({
                    starSign
                })
            } else if (parsedDate.month == 8 &&
                parsedDate.day >= 23 || parsedDate.month == 9 &&
                parsedDate.day <= 22) {
                const { starSign } = await Sign.create({
                    name,
                    birthdate: new Date(splitDate[2], splitDate[1] - 1, splitDate[0]),
                    starSign: 'Virgo'
                })
                return res.status(200).json({
                    starSign
                })
            } else if (parsedDate.month == 9 &&
                parsedDate.day >= 23 || parsedDate.month == 10 &&
                parsedDate.day <= 22) {
                const { starSign } = await Sign.create({
                    name,
                    birthdate: new Date(splitDate[2], splitDate[1] - 1, splitDate[0]),
                    starSign: 'Libra'
                })
                return res.status(200).json({
                    starSign
                })
            } else if (parsedDate.month == 10 &&
                parsedDate.day >= 23 || parsedDate.month == 11 &&
                parsedDate.day <= 21) {
                const { starSign } = await Sign.create({
                    name,
                    birthdate: new Date(splitDate[2], splitDate[1] - 1, splitDate[0]),
                    starSign: 'Scorpio'
                })
                return res.status(200).json({
                    starSign
                })
            } else if (parsedDate.month == 11 &&
                parsedDate.day >= 22 || parsedDate.month == 12 &&
                parsedDate.day <= 21) {
                const { starSign } = await Sign.create({
                    name,
                    birthdate: new Date(splitDate[2], splitDate[1] - 1, splitDate[0]),
                    starSign: 'Sagittarius'
                })
                return res.status(200).json({
                    starSign,
                })
            } else if (parsedDate.month == 12 &&
                parsedDate.day >= 22 || parsedDate.month == 1 &&
                parsedDate.day <= 20) {
                const { starSign } = await Sign.create({
                    name,
                    birthdate: new Date(splitDate[2], splitDate[1] - 1, splitDate[0]),
                    starSign: 'Capricorn'
                })
                return res.status(200).json({
                    starSign,
                })
            } else if (parsedDate.month == 1 &&
                parsedDate.day >= 21 || parsedDate.month == 2 &&
                parsedDate.day <= 19) {
                const { starSign } = await Sign.create({
                    name,
                    birthdate: new Date(splitDate[2], splitDate[1] - 1, splitDate[0]),
                    starSign: 'Aquarius'
                })
                return res.status(200).json({
                    starSign,
                })
            } else if (parsedDate.month == 2 &&
                parsedDate.day >= 20 || parsedDate.month == 3 &&
                parsedDate.day <= 20) {
                const { starSign } = await Sign.create({
                    name,
                    birthdate: new Date(splitDate[2], splitDate[1] - 1, splitDate[0]),
                    starSign: 'Pisces'
                })
                return res.status(200).json({
                    starSign,
                })
            } else {
                return res.status(400).json({ message: 'Invalid date' })
            }
        }
    }
}