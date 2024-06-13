import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createCategory } from "../../services/categoryService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import CategoryForm from "./CategoryForm";
import { objectToFormData } from "../../utils/formDataHelper";

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
      setError(`Failed to create category: ${e.message}`);
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
    <div className="container mt-4">
      {error && <div className="alert alert-danger">Error: {error}</div>}
      <CategoryForm
        headerText="Create a New Category"
        onSubmit={handleCreateSubmit}
        buttonText="Add"
      />
    </div>
  );
}

export default NewCategoryForm;
