import { Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9999/products")
      .then(response => {
        console.log(response);
        setProducts(response.data);
        console.log(response.data);
    })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
//   useEffect(() => {
//     fetch("http://localhost:9999/categories")
//       .then((response) => response.json())
//       .then((json) => {
//         setCategories(json);
//       })
//       .then((err) => {
//         console.log(err);
//       });
//   }, []);
//   useEffect(() => {
//     fetch("http://localhost:9999/suppliers")
//       .then((response) => response.json())
//       .then((json) => {
//         setSuppliers(json);
//       })
//       .then((err) => {
//         console.log(err);
//       });
//   }, []);

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete" + id)) {
//       fetch(`http://localhost:9999/products/${id}`, {
//         method: "DELETE",
//       })
//         .then(() => window.location.reload())
//         .catch((error) => {
//           console.error("Error deleting product:", error);
//         });
//     }
//   };

  return (
    // <Layout1 className="container">
      <Row>
        <Col xs={2}>col 2</Col>
        <Col xs={8}>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <h2>List products</h2>
            </Col>
          </Row>
          <Row>
            <Col
              // tyle={{ textAlign: "right" }}
              className="offset-md-9"
            >
              <Link to={"/product/add"} className="btn btn-success">
                Create
              </Link>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={8}>
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Category</th>
                    <th>Supplier</th>
                    <th>Continued</th>
                    <th></th>
                    <th className="text-center">Action</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  { products && products.map((product) => {
                    return (
                      <tr key={product._id}>
                        <td>{product._id}</td>
                        <td>
                          <Link to={"/product/detail/" + product._id}>
                            {product.name}
                          </Link>
                        </td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>
                          {categories.map((category) =>
                            category.id == product.category ? category.name : ""
                          )}
                        </td>
                        <td>
                          {suppliers.map((supplier) =>
                            supplier.id == product.supplier ? supplier.name : ""
                          )}
                        </td>

                        <td>{product.discontinued ? "Yes" : "No"}</td>
                        <td>
                          <Link
                            // to={"/product/edit/" + product.id}
                            className="btn btn-danger"
                          >
                            View
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={"/product/edit/" + product.id}
                            className="btn btn-danger"
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={"/"}
                            className="btn btn-danger"
                            // onClick={() => handleDelete(product.id)}
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
        <Col xs={2}>col 2</Col>
      </Row>
    // </Layout1>
  );
};

export default Products;
