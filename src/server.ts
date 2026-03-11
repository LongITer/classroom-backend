import express from 'express';
import subjectsRouter from "./routes/subjects";
import cors from "cors";
import SecurityMiddleware from "./middleware/security";
import {toNodeHandler} from "better-auth/node";
import {auth} from "./lib/auth";
const app = express();
const PORT = 8000;

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))

app.all('/api/auth/*splat', toNodeHandler(auth));

app.use(express.json());

app.use(SecurityMiddleware)

app.get('/', (_req, res) => {
  res.send('Hello World!');
});
app.use('/api/subjects', subjectsRouter)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
