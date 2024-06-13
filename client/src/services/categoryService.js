import { API_URL } from "../constants";

async function fetchAllCategories() {
  const response = await fetch(`${API_URL}/categories`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

async function fetchCategory(id) {
  const response = await fetch(`${API_URL}/categories/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

async function createCategory(categoryData) {
  const response = await fetch(`${API_URL}/categories`, {
    method: "POST",
    body: categoryData,
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

async function updateCategory(id, categoryData) {
  const response = await fetch(`${API_URL}/categories/${id}`, {
    method: "PUT",
    body: categoryData,
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

async function deleteCategory(id) {
  const response = await fetch(`${API_URL}/categories/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export {fetchAllCategories, fetchCategory, createCategory, updateCategory, deleteCategory};
