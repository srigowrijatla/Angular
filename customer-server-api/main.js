// // $>cd workspace
// // $> mkdir customer-server-api
// // $>cd customer-server-api
// // $>npm init -y
// // $>npm i express cors
// // express is framework

// // create file main.js as below

// // run
// // $>npm i -g nodemon
// // $>nodemon main.js

// // open http://localhost:4000/api/customer

// /// main.js content below
// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors());
// console.log("hello eee");
// let customerAPI = "/api/customer";

// let customers = [
//   {
//     id: 1,
//     name: "Vivek",
//     email: "vivek@abc.com",
//     phone: "8989389333",
//     address: "Singapore",
//   },
//   {
//     id: 2,
//     name: "Dev",
//     email: "dev@abc.com",
//     phone: "866u389333",
//     address: "India",
//   },
//   {
//     id: 3,
//     name: "Ameer",
//     email: "ameer@abc.com",
//     phone: "877779333",
//     address: "Asia",
//   },
//   {
//     id: 4,
//     name: "Dian",
//     email: "dian@gmail.com",
//     phone: "1234567876",
//     address: "Singapore",
//   },
//   {
//     id: 5,
//     name: "Apple",
//     email: "dian@gmail.com",
//     phone: "1234567876",
//     address: "Singapore",
//   },
//   {
//     id: 6,
//     name: "Orange",
//     email: "dian@gmail.com",
//     phone: "1234567876",
//     address: "Singapore",
//   },
// ];
// getNextId = () => {
//   if (customers.length === 0) {
//     return 1;
//   }
//   const list = customers.map(({ id }) => id);
//   let max = Math.max(...list);
//   return max + 1;
// };

// // API for customer
// app.post(customerAPI, function (req, res) {
//   console.log("customerAPI::", req.body);
//   req.body.id = getNextId();
//   customers.push(req.body);
//   res.send({ result: "ok", msg: "customer added ok" });
// });

// app.get(customerAPI, function (req, res) {
//   console.log("response customers");
//   res.send(customers);
// });

// app.get(customerAPI + "/:id", function (req, res) {
//   console.log("id:" + req.params.id);
//   let items = customers.filter((item) => item.id == req.params.id);
//   if (items.length > 0) {
//     res.send(items[0]);
//   } else {
//     res.send({});
//   }
// });
// app.put(customerAPI, function (req, res) {
//   // assignment
//   console.log("customerAPI::", req.body);
//   const record = req.body;
//   customers = customers.map((rec) => {
//     if (rec.id == record.id) {
//       return record;
//     }
//     return rec;
//   });
//   res.send({ result: "ok", msg: "customer updated ok" });
// });

// app.delete(customerAPI, function (req, res) {
//   // assignment
//   console.log("customerAPI::", req.body);
//   const delId = req.body.id;
//   customers = customers.filter((record) => record.id != delId);
//   res.send({ result: "ok", msg: "customer deleted ok" });
// });
// app.get("/", function (req, res) {
//   res.send("Hello World!");
// });

// app.get("/ibm", function (req, res) {
//   res.send("Hello IBM!");
// });

// app.post("/ibm", function (req, res) {
//   res.send("Hello IBM! POST");
// });

// app.get("/about", function (req, res) {
//   res.send("Hello About!");
// });

// app.get("/person", function (req, res) {
//   res.send("Hello Person!");
// });

// app.get("/employee", function (req, res) {
//   res.send("Hello Employee!");
// });

// var server = app.listen(4000, function () {
//   console.log("Express app listening at http://localhost:4000");
// });

const express = require("express");
var cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// getNextId = (array) => {
//   if (array.length == 0) {
//     return 1;
//   }
//   const numArr = this.array.map(({ id }) => id);
//   return Math.max(...numArr) + 1;
// };

getNextId = () => {
  if (customers.length === 0) {
    return 1;
  }
  const list = customers.map(({ id }) => id);
  let max = Math.max(...list);
  return max + 1;
};

getNextById = () => {
  if (products.length === 0) {
    return 1;
  }
  const list = products.map(({ id }) => id);
  let max = Math.max(...list);
  return max + 1;
};
let customers = [
  {
    id: 1,
    name: "Vivek",
    email: "vivek@abc.com",
    phone: "8989389333",
    address: "Singapore",
  },
  {
    id: 2,
    name: "Dev",
    email: "dev@abc.com",
    phone: "866u389333",
    address: "India",
  },
  {
    id: 3,
    name: "Ameer",
    email: "ameer@abc.com",
    phone: "877779333",
    address: "Asia",
  },
  {
    id: 4,
    name: "Dian",
    email: "dian@gmail.com",
    phone: "1234567876",
    address: "Singapore",
  },
  {
    id: 5,
    name: "Apple",
    email: "dian@gmail.com",
    phone: "1234567876",
    address: "Singapore",
  },
  {
    id: 6,
    name: "Orange",
    email: "dian@gmail.com",
    phone: "1234567876",
    address: "Singapore",
  },
];

let products = [
  {
    id: 1,
    name: "Television",
    type: "electronics",
    country: "IN",
    to: "vizag",
    from: "bangalore",
  },
  {
    id: 2,
    name: "Laptop",
    type: "electronics",
    country: "IN",
    to: "hyd",
    from: "bangalore",
  },
  {
    id: 3,
    name: "camera",
    type: "electronics",
    country: "IN",
    to: "chennai",
    from: "vijaywada",
  },
];

// API for customer
let customerAPI = "/api/customer";
let productAPI = "/api/product";

/// product API
app.get(productAPI, function (req, res) {
  console.log("response products");
  res.send(products);
});

app.get(productAPI + "/:id", function (req, res) {
  console.log("id:" + req.params.id);
  let items = products.filter((item) => item.id == req.params.id);
  if (items.length > 0) {
    res.send(items[0]);
  } else {
    res.send({});
  }
});

app.post(productAPI, function (req, res) {
  console.log("products::", req.body);
  req.body.id = getNextById(products);
  products.push(req.body);
  res.send({ result: "ok", msg: "product added ok" });
});

app.put(productAPI, function (req, res) {
  const record = req.body;
  products = products.map((rec) => {
    if (rec.id == record.id) {
      return record;
    }
    return rec;
  });
  res.send({ result: "ok", msg: "products updated ok" });
});

app.delete(productAPI, function (req, res) {
  const delId = req.body.id;
  products = products.filter((record) => record.id != delId);
  res.send({ result: "success", msg: "product deleted " });
});

app.delete(productAPI + "/:id", function (req, res) {
  const delId = req.params.id;
  products = products.filter((record) => record.id != delId);
  res.send({ result: "success", msg: "product deleted" });
});

/// customer API
app.get(customerAPI, function (req, res) {
  res.send(customers);
});

app.get(customerAPI + "/:id", function (req, res) {
  console.log("id:" + req.params.id);
  let items = customers.filter((item) => item.id == req.params.id);
  if (items.length > 0) {
    res.send(items[0]);
  } else {
    res.send({});
  }
});

app.post(customerAPI, function (req, res) {
  console.log("customerAPI::", req.body);
  req.body.id = getNextId(customers);
  customers.push(req.body);
  res.send({ result: "ok", msg: "customer added ok" });
});

app.put(customerAPI, function (req, res) {
  const record = req.body;
  customers = customers.map((rec) => {
    if (rec.id == record.id) {
      return record;
    }
    return rec;
  });
  res.send({ result: "ok", msg: "customer updated ok" });
});
app.delete(customerAPI + "/:id", function (req, res) {
  const delId = req.params.id;
  customers = customers.filter((record) => record.id != delId);
  res.send({ result: "ok", msg: "customer deleted ok" });
});
app.delete(customerAPI, function (req, res) {
  const delId = req.body.id;
  customers = customers.filter((record) => record.id != delId);
  res.send({ result: "ok", msg: "customer added ok" });
});
app.get("/", function (req, res) {
  res.send("Hello REST API Server");
});

app.listen(4000, function () {
  console.log("Express app listening at http://localhost:4000");
});
