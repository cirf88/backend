const amiiboCtrl = {};
const Amiibo = require('../models/Amiibo');
amiiboCtrl.getAmiibos = async (req, res) => {
    const amiibo = await Amiibo.find({ idUsuario: req.params.id });
    res.json(amiibo)
}

amiiboCtrl.createAmiibo = async (req, res) => {
    const { amiiboseries, character, gameseries, name, tail, idUsuario } = req.body;
    const newAmiibo = new Amiibo({
        character: character,
        name: name,
        tail: tail,
        idUsuario: idUsuario
    });
    await newAmiibo.save();
    res.json({ message: 'Amiibo Saved' })
}

amiiboCtrl.getAmiibo = async (req, res) => {
    const amiibo = await Amiibo.findById(req.params.id);
    res.json(amiibo);
}

amiiboCtrl.updateAmiibo = async (req, res) => {
    const { amiiboseries, character, gameseries, name, tail } = req.body;
    await Amiibo.findOneAndUpdate({ _id: req.params.id }, {
        character: character,
        name: name,
        tail: tail
    });
    res.json({ message: 'Amiibo Updated' })
}

amiiboCtrl.deleteAmiibo = async (req, res) => {
    await Amiibo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Amiibo Deleted' })
}

module.exports = amiiboCtrl;