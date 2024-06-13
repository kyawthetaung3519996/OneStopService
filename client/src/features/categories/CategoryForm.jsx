import { useState } from "react";
import PropTypes from "prop-types";

function CategoryForm({ category = { name: "", image: "" }, headerText, onSubmit, buttonText }) {
  const [formData, setFormData] = useState({
    name: category.name || "",
    image: category.image || "",
  });

  return (
    <div>
      <h2>{headerText}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formData);
        }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image:</label>
          <input
            type="file"
            accept="image/*"
            id="image"
            className="form-control"
            onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
          />
          {formData.image && (
            <div className="mt-3">
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Selected"
                className="img-thumbnail"
                style={{ maxHeight: "200px" }}
              />
            </div>
          )}
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
}

CategoryForm.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(File)]),
  }),
  headerText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default CategoryForm;
