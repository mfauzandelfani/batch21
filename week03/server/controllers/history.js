import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const history = await sequelize.query("SELECT * from job_history ", {
      type: sequelize.QueryTypes.SELECT,
    });
    return res.send(history);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const history = await sequelize.query(
      "SELECT * from job_history where employee_id = :id",
      { replacements: { id: req.params.id }, type: sequelize.QueryTypes.SELECT }
    );
    return res.send(history);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const create = async (req, res) => {
  try {
    const history = await sequelize.query(
      `insert into job_history (employee_id,start_date) values (:id, :date)`,
      {
        replacements: {
          id: req.body.id,
          date: req.body.date
        },
        type: sequelize.QueryTypes.INSERT,
      }
    );
    return res.send(history);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const update = async (req, res) => {
  try {
    const history = await sequelize.query(
      `update job_history set start_date = :date where employee_id = :id`,
      {
        replacements: {
          date: req.body.date,
          id: req.params.id,
        },
        type: sequelize.QueryTypes.UPDATE,
      }
    );
    return res.send(history);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const history = await sequelize.query(
      `delete from job_history where employee_id = :id`,
      {
        replacements: { id: req.params.id },
        type: sequelize.QueryTypes.DESTROY,
      }
    );
    return res.send(history.rowCount);
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
