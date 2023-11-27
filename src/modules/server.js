const port = process.env.PORT || 9000;
const start = () => console.log(`Servidor corriendo en puerto ${port}`);
module.exports = {port,start};