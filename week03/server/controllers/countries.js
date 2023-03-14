import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const countries = await req.context.models.countries.findAll();
    return res.send(countries);
  } catch (error) {
    return res.status(400).send(error);
  }
};
const findOne = async (req, res) => {
  try {
    const countries = await req.context.models.countries.findOne({
      where: { country_id: req.params.id },
    });
    return res.send(countries);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const create = async (req, res) => {
  try {
    const countries = await req.context.models.countries.create({
      country_id: req.body.id,
      country_name: req.body.name,
    });
    return res.send(countries);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const update = async (req, res) => {
  try {
    const countries = await req.context.models.countries.update(
      { 
        country_name: req.body.name
      },
      { returning: true, where: { country_id: req.params.id } }
    );
    return res.send(countries);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const country = await req.context.models.countries.destroy({
      where: { country_id: req.params.id },
    });
    return res.send(`delete ${country} rows`);
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
