require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const { swaggerUi, swaggerSpec } = require("./docs/swagger");

const app = express();

// ==============================
// Connect MongoDB
// ==============================
connectDB();

// ==============================
// Middleware
// ==============================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==============================
// Home Route
// ==============================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Task Tracker API is Running 🚀",
  });
});

// ==============================
// API Routes
// ==============================
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);

// ==============================
// Swagger
// ==============================
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ==============================
// 404 Handler
// ==============================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// ==============================
// Global Error Handler
// ==============================
app.use((err, req, res, next) => {
  console.error("========== GLOBAL ERROR ==========");
  console.error(err);
  console.error("==================================");

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// ==============================
// Start Server
// ==============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("==================================");
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📘 Swagger Docs : http://localhost:${PORT}/api-docs`);
  console.log("==================================");
});