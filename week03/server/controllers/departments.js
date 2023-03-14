import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const department = await sequelize.query("SELECT * from departments ", {
      type: sequelize.QueryTypes.SELECT,
    });
    return res.send(department);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const customer = await sequelize.query(
      "SELECT * from departments where department_id = :id",
      { replacements: { id: req.params.id }, type: sequelize.QueryTypes.SELECT }
    );
    return res.send(customer);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const create = async (req, res) => {
  try {
    const customer = await sequelize.query(
      `insert into departments (location_id, department_name) values (:id, :name)`,
      {
        replacements: { id: req.body.id, name: req.body.name },
        type: sequelize.QueryTypes.INSERT,
      }
    );
    return res.send(customer);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const update = async (req, res) => {
  try {
    const customer = await sequelize.query(
      `update departments set department_name = :name where department_id = :id`,
      {
        replacements: { name: req.body.name, id: req.params.id },
        type: sequelize.QueryTypes.UPDATE,
      }
    );
    return res.send(customer);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const customer = await sequelize.query(
      `delete from departments where department_id = :id`,
      {
        replacements: { id: req.params.id },
        type: sequelize.QueryTypes.DESTROY,
      }
    );
    return res.send(customer.rowCount);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default {
  findAll,
  findOne,
  create,
  update,
  deleted,
};
