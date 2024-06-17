import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchCategory, updateCategory } from "../../services/categoryService";
import CategoryForm from "./CategoryForm";
import { objectToFormData } from "../../utils/formDataHelper";
import NavbarTitle from "../../components/NavbarTitle";

function EditCategoryForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrentCategory = async () => {
      try {
        const data = await fetchCategory(id);
        setCategory(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchCurrentCategory();
  }, [id]);

  const handleUpdateSubmit = async (rawData) => {
    const sanitizedData = {
      name: rawData.name,
      image: rawData.image,
    };
    const formData = objectToFormData({ category: sanitizedData });
    try {
      await updateCategory(id, formData);
      navigate("/categories");
    } catch (e) {
      setError(e.message);
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
      <NavbarTitle title="Update Category" />
      <div className="container-fluid main-content">
        <CategoryForm
          category={category}
          onSubmit={handleUpdateSubmit}
          buttonText="Save"
          errorMessages={error ? JSON.parse(error) : null}
        />
      </div>
    </>
  );
}

export default EditCategoryForm;
