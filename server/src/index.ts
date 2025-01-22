import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
//  route imports
import dashboardRoutes from "./routes/dashboardRoutes";
import productsRoutes from "./routes/productRoute";
import userRoute from "./routes/userRoutes";
import expenseRoute from "./routes/expenseRoute";
// configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// routes
app.use("/dashboard", dashboardRoutes);
app.use("/products", productsRoutes);
app.use("/users", userRoute);
app.use("/expenses", expenseRoute);
// server
const port = Number(process.env.PORT) || 3001;
app.listen(port, "0.0.0.0", () => {
  console.log(`server running on port ${port} 🚀🚀`);
});
