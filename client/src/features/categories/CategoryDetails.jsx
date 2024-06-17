import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchCategory } from "../../services/categoryService";
import NavbarTitle from "../../components/NavbarTitle";

function CategoryDetails() {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCurrentCategory = async () => {
      try {
        const data = await fetchCategory(id);
        setCategory(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCurrentCategory();
  }, [id]);

  if (loading) return <div className="text-center mt-5"><FontAwesomeIcon icon={faSpinner} spin size="2x" /></div>;

  if (error) return <div className="alert alert-danger mt-4">Error: {error}</div>;

  return (
    <>
      <NavbarTitle title="Category Details" />
      <div className="container-fluid main-content">
        {category ? (
          <>
            <span><b>Name: </b>{category.name}</span>
            <div>
              {category.image_url && (
                <img src={category.image_url} alt={category.name} className="category-image img-fluid" />
              )}
            </div>
            <Link to="/categories" className="btn btn-primary mt-3">Back</Link>
          </>
        ) : (
          <div className="alert alert-warning mt-4">No category found</div>
        )}
      </div>
    </>
  );
}

export default CategoryDetails;
