import Cliente from '../models/Cliente.js';
import Pedido from '../models/Pedido.js';

// Definindo as associações entre os modelos
const defineAssociations = () => {
    // um cliente possui muitos pedidos 
    Cliente.hasMany(Pedido, { foreignKey: 'cliente_id' });
    // um pedido pertence a um cliente
    Pedido.belongsTo(Cliente, {foreignKey: 'cliente_id'});

};
export default defineAssociations;