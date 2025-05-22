import express from "express";
import dotenv from "dotenv/config";
import indexRoutes from "./routes/index.routes";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use("/api", indexRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
