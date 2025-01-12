import { createHashRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import { MainPage } from "@/pages/main";
import { Payment } from "@/pages/payment";
import { Form } from "@/widgets/form-volunteer";
import { FormSubmit } from "@/pages/form";
import AdminPanel from "@/admin/admin-panel/ui/AdminPanel";
import { NewsList } from "@/admin/news-list/ui/NewsList";
import ProtectedRoute from "@/admin/protected/ProtectedRoute";
import { Login } from "@/admin/login";
import { ProjectsList } from "@/admin/projects-list";
import { ErrorPage } from "@/widgets/error-page";
import { CreateNewsForm } from "@/admin/create-news-form";
import UpdateNewsForm from "@/admin/update-news-form/ui/UdpateNewsForm";
import { NewsItem } from "@/pages/news-item";
import CreateProjectForm from "@/admin/create-project-form/ui/CreateProjectForm";

// import { NewsPage } from "@/pages/news";
const appRouter = createHashRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "payment", element: <Payment /> },
      { path: "form", element: <Form /> },
      { path: "form/submit", element: <FormSubmit /> },
      {path: "news/:id", element: <NewsItem />},
      {
        path: "admin",
        element: <ProtectedRoute />,
        children: [
          { index: true, element: <AdminPanel /> }, // Головна сторінка адмінки
          // { path: "news/create", element: <CreateNewsForm /> }, // Сторінка створення новини
          { path: "news", element: <NewsList /> }, // Сторінка зі списком новин
          { path: "news/create", element: <CreateNewsForm /> }, // Сторінка створення новини
          { path: "news/update/:id", element: <UpdateNewsForm/> }, // Сторінка оновлення новини

          { path: "projects", element: <ProjectsList /> }, // Сторінка проектів
          { path: "projects/create", element: <CreateProjectForm /> }, // Сторінка створення новини

        ],
      },
      { path: "login", element: <Login /> },
    ],
  },
]);

export default appRouter;