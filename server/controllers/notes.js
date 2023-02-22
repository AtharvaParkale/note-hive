import Note from "../models/Note.js";

export const getNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    res.status(200).json(note);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const addNote = async (req, res) => {
  try {
    const { title, description, backGround } = req.body;
    const newNote = new Note({
      title,
      description,
      backGround,
    });
    const savedNote = await newNote.save();
    // res.status(201).json({
    //   message: "Note saved successfully !",
    //   data: { savedNote },
    // });

    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);

    if (note) {
      await Note.remove({ _id: id });
      const notes = await Note.find();
      res.status(200).json(notes);
    } else {
      res.status(201).json({ message: "Note not found to delete !" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, backGround } = req.body;
    const note = await Note.findById(id);

    if (note) {
      await Note.updateOne(
        { _id: id },
        {
          $set: {
            title: title,
            description: description,
            backGround: backGround,
          },
        }
      );

      const notes = await Note.find();
      res.status(200).json(notes);
    } else {
      res.status(201).json({ message: "No note found !" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
