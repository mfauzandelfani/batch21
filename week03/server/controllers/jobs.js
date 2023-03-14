import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const job= await sequelize.query("SELECT * from jobs ", {
      type: sequelize.QueryTypes.SELECT,
    });
    return res.send(job);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const job = await sequelize.query(
      "SELECT * from jobs where job_id = :id",
      { replacements: { id: req.params.id }, type: sequelize.QueryTypes.SELECT }
    );
    return res.send(job);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const create = async (req, res) => {
  try {
    const job = await sequelize.query(
      `insert into jobs (job_id, job_title) values (:id, :job)`,
      {
        replacements: {
          id: req.body.id,
          job: req.body.job,
         
        },
        type: sequelize.QueryTypes.INSERT,
      }
    );
    return res.send(job);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const update = async (req, res) => {
  try {
    const job = await sequelize.query(
      `update jobs set job_title = :job where job_id = :id`,
      {
        replacements: {
          job: req.body.job,
          id: req.params.id,
        },
        type: sequelize.QueryTypes.UPDATE,
      }
    );
    return res.send(job);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const job = await sequelize.query(
      `delete from jobs where job_id = :id`,
      {
        replacements: { id: req.params.id },
        type: sequelize.QueryTypes.DESTROY,
      }
    );
    return res.send(job.rowCount);
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
