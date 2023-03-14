import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const loc = await sequelize.query("SELECT * from locations ", {
      type: sequelize.QueryTypes.SELECT,
    });
    return res.send(loc);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const job = await sequelize.query("SELECT * from locations where location_id = :id", {
      replacements: { id: req.params.id },
      type: sequelize.QueryTypes.SELECT,
    });
    return res.send(job);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const create = async (req, res) => {
  try {
    const loc = await sequelize.query(
      `insert into locations (city) values (:city)`,
      {
        replacements: {
       
          city: req.body.city
       
        },
        type: sequelize.QueryTypes.INSERT,
      }
    );
    return res.send(loc);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const update = async (req, res) => {
  try {
    const loc = await sequelize.query(
      `update locations set city = :city where location_id = :id`,
      {
        replacements: {
          city: req.body.city,
          id: req.params.id,
        },
        type: sequelize.QueryTypes.UPDATE,
      }
    );
    return res.send(loc);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const loc = await sequelize.query(`delete from locations where location_id = :id`, {
      replacements: { id: req.params.id },
      type: sequelize.QueryTypes.DESTROY,
    });
    return res.send(loc.rowCount);
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
