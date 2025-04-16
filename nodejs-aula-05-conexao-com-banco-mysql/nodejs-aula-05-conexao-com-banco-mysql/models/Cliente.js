import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

//criando o model (tabela no banco)
const Cliente = connection.define("clientes", {
  //colunas da tabela
  nome: {
    // tipo de dado
    type: Sequelize.STRING,
    //permite vazio??
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
//criando a tabela somente se ainda nao existe
Cliente.sync({force: false})
export default Cliente;
