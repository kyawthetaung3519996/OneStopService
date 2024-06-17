import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createCategory } from "../../services/categoryService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import CategoryForm from "./CategoryForm";
import { objectToFormData } from "../../utils/formDataHelper";
import NavbarTitle from "../../components/NavbarTitle";

function NewCategoryForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCreateSubmit = async (rawData) => {
    setLoading(true);
    setError(null);
    try {
      const formData = objectToFormData({ category: rawData });
      await createCategory(formData);
      navigate(`/categories`);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <FontAwesomeIcon icon={faSpinner} spin size="2x" />
      </div>
    );
  }

  return (
    <>
      <NavbarTitle title="Add New Category" />
      <div className="container-fluid main-content">
        <CategoryForm
          onSubmit={handleCreateSubmit}
          buttonText="Add"
          errorMessages={error ? JSON.parse(error) : null}
        />
      </div>
    </>
  );
}

export default NewCategoryForm;
