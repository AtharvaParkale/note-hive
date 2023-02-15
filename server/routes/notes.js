import express from "express";
import {
  getNote,
  getAllNotes,
  addNote,
  deleteNote,
  updateNote
} from "../controllers/notes.js";

const router = express.Router();

/* READ */
router.get("/",  getAllNotes);
router.get("/:id",  getNote);

//Add/delete note
router.put("/",addNote);
router.delete("/:id",deleteNote);

// UPDATE NOTE
router.patch("/:id",updateNote);


export default router;
