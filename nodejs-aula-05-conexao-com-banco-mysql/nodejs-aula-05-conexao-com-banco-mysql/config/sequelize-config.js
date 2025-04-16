//importando o sequelize
import sequelize from "sequelize";

//criando os dados de conexao com o banco de dados
const connection = new sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  //comente a linha abaixo na primeira execucao do projeto
  database: "sistemaLoja",
  timezone: "-03:00",
});
export default connection;
