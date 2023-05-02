const Album = require('../models/albums');
const mongoose = require('mongoose');

// GET ALL

async function getAllEntries(req, res) {
  try {
    const albums = await Album.find({});
    res.status(200).json(albums);
  } catch (err) {
    res.status(500).json(err.message);
  };
};

// GET SINGLE BY ID

async function getEntryById(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(200).json('Id is not a valid id!' );
    };

    const album = await Album.findById(id);

    if (!album) {
      return res.status(200).json('No album found with such id!');
    };

    res.status(200).json(album);
  } catch (err) {
    err => res.status(500).json(err.message);
  };
};

// POST

async function createEntry(req, res) {
 try {
   
   try {
    const { artist, albumName, releaseYear } = req.body;

      const album = await Album.create({ artist, albumName, releaseYear });
      res.status(200).json(`Added the album '${album.albumName}' by '${album.artist}' to the collection.`);
    } catch (err) {
      res.status(400).json(err.message);
    };
  } catch (err) {
    res.status(500).json(err.message);
  };
};


// UPDATE

async function updateEntry(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(200).json('Id is not a valid id!' );
    };

    if (!album) {
      return res.status(200).json('No album found with such id!')
    };

    const body = { ...req.body };
    for (const [key, value] of Object.entries(body)) {
      if (value.length === 0) {
        return res.status(400).json('Values can not be empty!')
      };
    };
    
    const album = await Album.findByIdAndUpdate(id, { ...req.body });

 
    res.status(200).json(`Entry with id: '${id}' updated successfully! Current values are artist: '${body.artist}', album name: '${body.albumName}', release year: '${body.releaseYear}'.`);
  } catch (err) {
    res.status(500).json(err.message);
  };
};

// DELETE

async function deleteEntry(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(200).json('Id is not a valid MongoDb id!' );
    };

    const album = await Album.findByIdAndDelete(id);

    if (!album) {
      return res.status(200).json('No album found with such id!')
    };

    res.status(200).json(`Deleted the album '${album.albumName}' by '${album.artist}' from the collection.`);
  } catch (err) {
    res.status(500).json(err.message);
  };
};

module.exports = { 
  getAllEntries,
  getEntryById,
  createEntry,
  updateEntry,
  deleteEntry };