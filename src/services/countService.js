const { getCountRegistros } = require('../entities/count_table.js');


async function buscarCount() {
    return await getCountRegistros();
}

module.exports = { buscarCount };