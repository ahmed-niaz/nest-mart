const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 3000;

// middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());

// mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clusterone.lxvfmw8.mongodb.net/?retryWrites=true&w=majority&appName=ClusterOne`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// jwt
// jwt
app.post("/jwt", async (req, res) => {
  const userEmail = req.body;
  const token = jwt.sign(userEmail, process.env.JWT_TOKEN, {
    expiresIn: "123d",
  });
  res.send({ token });
});

// token verification
const verifyToken = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.send({ message: "No token" });
  }

  const token = authorization.split(" ")[1];
  jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
    if (err) {
      return res.send({ message: "invalid token" });
    }
    req.decoded = decoded;
    next();
  });
};

// collection
const database = client.db("nest-mart");
const usersCollection = database.collection("users");
const buyersCollection = database.collection("buyers");
const sellersCollection = database.collection("sellers");
const productsCollection = database.collection("products");

const dbConnect = async () => {
  try {
    client.connect();
    console.log(`Database connected successfully`);

    // USER
    // GET user
    app.get("/users", async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });
    // SAVE new user data in database
    app.put("/user", async (req, res) => {
      const user = req.body;
      const query = {
        email: user?.email,
      };
      // check if user already exist in db
      const isExist = await usersCollection.findOne(query);

      // if(isExist ) return res.send(isExist)
      if (isExist) {
        if (user?.status === "Requested") {
          // if existing user try to change his role
          const result = await usersCollection.updateOne(query, {
            $set: { status: user?.status },
          });

          return res.send(result);
        } else {
          // if existing user login again
          return res.send(isExist);
        }
      }

      // save user for first time
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          ...user,
          timestamp: Date.now(),
        },
      };
      const result = await usersCollection.updateOne(query, updateDoc, options);
      res.send(result);
    });

    // PRODUCTS
    // add product
    app.post("/add-products", async (req, res) => {
      try {
        const product = req.body;
        const result = await productsCollection.insertOne(product);
        res.send(result);
      } catch (err) {
        console.error("Error fetching user data:", err.message);
      }
    });

    // get products
    app.get("/my-products", async (req, res) => {
      const { title, brand, category, sort, page = 1, limit = 9 } = req.query;
      const query = {};

      if (title) {
        query.title = { $regex: title, $options: "i" };
      }

      if (category) {
        query.category = category;
      }

      if (brand) {
        query.brand = brand;
      }

      const pageNumber = Number(page);
      const limitNumber = Number(limit);
      const sortOption = sort === "asc" ? 1 : -1;
      const products = await productsCollection
        .find(query)
        .skip((pageNumber - 1) * limitNumber)
        .limit(limitNumber)
        .sort({ price: sortOption })
        .toArray();

      // const product_info = await productsCollection
      //   .find({}, { projection: { category: 1, brand: 1 } })
      //   .toArray();
      const brands = [...new Set(products.map((b) => b.brand))];
      const categories = [...new Set(products.map((c) => c.category))];
      const totalProducts = await productsCollection.countDocuments(query);

      res.send({ products, totalProducts, brands, categories });
    });
  } catch (error) {
    console.log(error.name, error.message);
  }
};

dbConnect();

// api
app.get("/", async (req, res) => {
  res.send("nest mart server is running");
});

app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});
