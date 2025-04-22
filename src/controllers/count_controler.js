const { buscarCount } = require('../services/countService.js')

async function listarCount(req, res) {
    try {
        const produtos = await buscarCount();
        res.json(produtos);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
}

module.exports = {listarCount};