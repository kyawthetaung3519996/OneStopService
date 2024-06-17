import React from "react";
import { Routes, Route } from "react-router-dom";

import CategoriesList from "../features/categories/CategoriesList";
import CategoryDetails from "../features/categories/CategoryDetails";
import NewCategoryForm from "../features/categories/NewCategoryForm";
import EditCategoryForm from "../features/categories/EditCategoryForm";
import DashboardList from "../features/dashboard/DashboardList";

function AppRoutes() {
  return(
    <Routes>
      <Route path="/dashboard" element={<DashboardList />} />
      <Route path="/categories" element={<CategoriesList />} />
      <Route path="/categories/:id" element={<CategoryDetails />} />
      <Route path="/categories/new" element={<NewCategoryForm />} />
      <Route path="/categories/:id/edit" element={<EditCategoryForm />} />
    </Routes>
  );
}

export default AppRoutes;
