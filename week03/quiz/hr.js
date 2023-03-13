import dotenv from "dotenv";
import express from "express";
dotenv.config();

const Pool = require("pg").Pool;
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "lampu123",
  port: 5432,
  database: "hr-db",
});

const app = express();
app.use(express.json());
const port = process.env.PORT || 3005;

app.listen(port, () => console.log(`Server listening on port ${port}`));

app.get("/api/region", (req, res) => {
  pool.query("select * from regions", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/region/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from regions where region_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
});

app.post("/api/region", (req, res) => {
  const { name } = req.body;
  pool.query(
    "insert into regions (region_name) values ($1)",
    [name],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
});

app.put("/api/region/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  pool.query(
    "update regions set region_name = $1 where region_id = $2",
    [name, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json("Data berhasil update");
    }
  );
});

app.delete("/api/region/:id", (req, res) => {
  const { id } = req.params;

  pool.query(
    "delete from regions where region_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("data berhasil dihapus");
    }
  );
});

//countries
app.get("/api/countries", (req, res) => {
  pool.query("select * from countries", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/countries/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from countries where country_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
});

app.post("/api/countries", (req, res) => {
  const {id} = req.body;  
  const { name } = req.body;
  pool.query(
    "insert into countries (country_id, country_name) values ($1, $2)",
    [id, name],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
});

app.put("/api/countries/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  pool.query(
    "update countries set country_name = $1 where country_id = $2",
    [name, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json("Data berhasil update");
    }
  );
});

app.delete("/api/countries/:id", (req, res) => {
  const { id } = req.params;

  pool.query(
    "delete from countries where country_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("data berhasil dihapus");
    }
  );
});

//customers
app.get("/api/customers", (req, res) => {
  pool.query("select * from customers", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/customers/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from customers where cust_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
});

app.post("/api/customers", (req, res) => {
  const { name } = req.body;
  pool.query(
    "insert into customers (cust_name) values ($1)",
    [name],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
});

app.put("/api/customers/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  pool.query(
    "update customers set cust_name = $1 where cust_id = $2",
    [name, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json("Data berhasil update");
    }
  );
});

app.delete("/api/customers/:id", (req, res) => {
  const { id } = req.params;

  pool.query(
    "delete from customers where cust_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("data berhasil dihapus");
    }
  );
});

//Departments
app.get("/api/departments", (req, res) => {
  pool.query("select * from departments", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/departments/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from departments where department_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
});

app.post("/api/departments", (req, res) => {
  const {id} = req.body;  
  const { name } = req.body;
  pool.query(
    "insert into departments (location_id, department_name) values ($1, $2)",
    [id, name],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
});

app.put("/api/departments/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  pool.query(
    "update departments set department_name = $1 where department_id = $2",
    [name, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json("Data berhasil update");
    }
  );
});

app.delete("/api/departments/:id", (req, res) => {
  const { id } = req.params;

  pool.query(
    "delete from departments where department_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("data berhasil dihapus");
    }
  );
});
// employees
app.get("/api/employees", (req, res) => {
  pool.query("select * from employees", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/employees/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from employees where employee_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
});

app.post("/api/employees", (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { name2 } = req.body;
  pool.query(
    "insert into employees (department_id, first_name, last_name) values ($1, $2, $3)",
    [id, name, name2],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
});

app.put("/api/employees/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { name2 } = req.body;

  pool.query(
    "update employees set first_name = $1, last_name = $2 where employee_id = $3",
    [name,name2, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json("Data berhasil update");
    }
  );
});

app.delete("/api/employees/:id", (req, res) => {
  const { id } = req.params;

  pool.query(
    "delete from employees where employee_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("data berhasil dihapus");
    }
  );
});
//job_history
app.get("/api/history", (req, res) => {
  pool.query("select * from job_history", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/history/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from job_history where employee_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
});

app.post("/api/history", (req, res) => {

  const {id} = req.body;
  const { name } = req.body;
  const {name2} = req.body;
  pool.query(
    "insert into job_history (employee_id, department_id, start_date) values ($1, $2, $3)",
    [id, name, name2],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
});

app.put("/api/history/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;


  pool.query(
    "update job_history set start_date = $1 where employee_id = $2",
    [name, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json("Data berhasil update");
    }
  );
});

app.delete("/api/history/:id", (req, res) => {
  const { id } = req.params;

  pool.query(
    "delete from job_history where employee_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("data berhasil dihapus");
    }
  );
});

//jobs
app.get("/api/jobs", (req, res) => {
  pool.query("select * from jobs", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/jobs/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from jobs where job_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
});

app.post("/api/jobs", (req, res) => {
  
  const {id} = req.body
  const { name } = req.body;
  
  pool.query(
    "insert into jobs (job_id, job_title) values ($1, $2)",
    [id, name],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
});

app.put("/api/jobs/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  pool.query(
    "update jobs set job_title = $1 where job_id = $2",
    [name, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json("Data berhasil update");
    }
  );
});

app.delete("/api/jobs/:id", (req, res) => {
  const { id } = req.params;

  pool.query(
    "delete from jobs where job_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("data berhasil dihapus");
    }
  );
});

//locations
app.get("/api/locations", (req, res) => {
  pool.query("select * from locations", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/locations/:id", (req, res) => {
  const { id } = req.params;
  pool.query("select * from locations where location_id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.post("/api/locations", (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { name2 } = req.body;

  pool.query(
    "insert into locations (location_id, country_id, city) values ($1, $2, $3)",
    [id, name, name2],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
});

app.put("/api/locations/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  pool.query(
    "update locations set city = $1 where location_id = $2",
    [name, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json("Data berhasil update");
    }
  );
});

app.delete("/api/locations/:id", (req, res) => {
  const { id } = req.params;

  pool.query("delete from locations where location_id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).end("data berhasil dihapus");
  });
});