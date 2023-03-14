import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const employee = await sequelize.query("SELECT * from employees ", {
      type: sequelize.QueryTypes.SELECT,
    });
    return res.send(employee);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const employee = await sequelize.query(
      "SELECT * from employees where employee_id = :id",
      { replacements: { id: req.params.id }, type: sequelize.QueryTypes.SELECT }
    );
    return res.send(employee);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const create = async (req, res) => {
  try {
    const employee = await sequelize.query(
      `insert into employees (department_id, first_name, last_name) values (:id, :first, :last)`,
      {
        replacements: {
          id: req.body.id,
          first: req.body.first,
          last: req.body.last,
        },
        type: sequelize.QueryTypes.INSERT,
      }
    );
    return res.send(employee);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const update = async (req, res) => {
  try {
    const employee = await sequelize.query(
      `update employees set first_name = :first, last_name = :last where employee_id = :id`,
      {
        replacements: {
          first: req.body.first,
          last: req.body.last,
          id: req.params.id,
        },
        type: sequelize.QueryTypes.UPDATE,
      }
    );
    return res.send(employee);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const employee = await sequelize.query(
      `delete from employees where employee_id = :id`,
      {
        replacements: { id: req.params.id },
        type: sequelize.QueryTypes.DESTROY,
      }
    );
    return res.send(employee.rowCount);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default {
  findAll,
  findOne,
  create,
  update,
  deleted
};
