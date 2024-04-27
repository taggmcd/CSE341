const mongodb = require('../database/mongodb');
const ObjectId = require('mongodb').ObjectId;

const index = async (req, res) => {
  const result = await mongodb
    .getDatabase()
    .db()
    .collection('contacts')
    .find({});

  result.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
  });
};

const show = async (req, res) => {
  const result = await mongodb
    .getDatabase()
    .db()
    .collection('contacts')
    .find({ _id: new ObjectId(req.params.id) });

  result.toArray().then((contact) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contact);
  });
};

module.exports = { index, show };
