// backend/src/routes/bookRoutes.js
import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router();

// Create Book
router.post("/", async (req, res) => {
  const { title, author } = req.body;
  const book = await prisma.book.create({ data: { title, author } });
  res.json(book);
});

// Get All Books
router.get("/", async (req, res) => {
  const books = await prisma.book.findMany();
  res.json(books);
});

// Update Book
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const book = await prisma.book.update({
    where: { id: Number(id) },
    data: { title, author },
  });
  res.json(book);
});

// Delete Book
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.book.delete({ where: { id: Number(id) } });
  res.json({ message: "Book deleted" });
});

export default router;
