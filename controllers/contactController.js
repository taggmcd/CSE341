const { response } = require('express');
const mongodb = require('../database/mongodb');
const e = require('express');
const ObjectId = require('mongodb').ObjectId;

const index = async (req, res) => {
  //#swagger.tags = ['Contacts']
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
  //#swagger.tags = ['Contacts']
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

const create = async (req, res) => {
  //#swagger.tags = ['Contacts']
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthdate: req.body.birthdate,
    favoriteColor: req.body.favoriteColor,
    email: req.body.email,
  };
  const result = await mongodb
    .getDatabase()
    .db()
    .collection('contacts')
    .insertOne(contact);

  if (result.acknowledged) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json('Error creating contact');
  }
};

const update = async (req, res) => {
  //#swagger.tags = ['Contacts']
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthdate: req.body.birthdate,
    favoriteColor: req.body.favoriteColor,
    email: req.body.email,
  };
  const result = await mongodb
    .getDatabase()
    .db()
    .collection('contacts')
    .updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });

  if (result.modifiedCount > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json('Error updating contact');
  }
};

const destroy = async (req, res) => {
  //#swagger.tags = ['Contacts']
  const result = await mongodb
    .getDatabase()
    .db()
    .collection('contacts')
    .deleteOne({ _id: new ObjectId(req.params.id) });

  if (result.deletedCount > 0) {
    console.log(result);

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json('Error deleting contact');
  }
};

module.exports = { index, show, create, update, destroy };
