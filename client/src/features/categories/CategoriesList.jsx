import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faInfoCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import { deleteCategory, fetchAllCategories } from "../../services/categoryService";
import NavbarTitle from "../../components/NavbarTitle";

function CategoriesList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await fetchAllCategories();
        setCategories(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    loadCategories();
  }, []);

  const deleteCategoryHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        setDeleting(true);
        await deleteCategory(id);
        setCategories(categories.filter((category) => category.id !== id));
      } catch (e) {
        setError(e.message);
      } finally {
        setDeleting(false);
      }
    }
  };

  if (loading) {
    return <div className="text-center"><FontAwesomeIcon icon={faSpinner} spin size="2x" /></div>;
  }

  return (
    <>
      <NavbarTitle title="Categories List" />
      <div className="container-fluid main-content">
        <Link to="/categories/new" className="btn btn-outline-primary btn-sm mb-2">ADD CATEGORY</Link>
        {error && <div className="text-danger mb-3">Error: {error}</div>}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.name}</td>
                <td>
                  {category.image_url && (
                    <img src={category.image_url} alt={category.name} className="img-fluid" style={{ maxWidth: "100px" }} />
                  )}
                </td>
                <td>
                  <Link to={`/categories/${category.id}`} className="btn btn-outline-info btn-sm me-2">
                    <FontAwesomeIcon icon={faInfoCircle} />
                  </Link>
                  <Link to={`/categories/${category.id}/edit`} className="btn btn-outline-warning btn-sm me-2">
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                  <button
                    onClick={() => deleteCategoryHandler(category.id)}
                    className="btn btn-outline-danger btn-sm"
                    disabled={deleting}
                  >
                    {deleting ? <FontAwesomeIcon icon={faSpinner} spin /> : <FontAwesomeIcon icon={faTrash} />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CategoriesList;
