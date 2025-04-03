import { createHashRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import { MainPage } from "@/pages/main";
import { Payment } from "@/pages/payment";
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
import FormVolunteer from "@/widgets/form-volunteer/ui/FormVolunteer";
import FormPartner from "@/widgets/form-partner/ui/FormPartner";
import { VolunteersList } from "@/admin/volunteers-list";
import { PartnersList } from "@/admin/partners-list";
import { CreateFormVolunteer } from "@/admin/create-volunteer-form";
import { CreateFormPartner } from "@/admin/create-partner-form";
import Registration from "@/admin/registration/ui/Registration";
import { Profile } from "@/admin/profile";
import { AllowedEmailList } from "@/admin/allowed-email-list";
import { UsersList } from "@/admin/users-list";
import { DonatesList } from "@/admin/donates-list";
import { CreateDocuments } from "@/admin/create-ducuments";
import { DocumentsList } from "@/admin/documents-list";
import { Reports } from "@/widgets/reports";
import { Foundings } from "@/widgets/foundings";

// import { NewsPage } from "@/pages/news";
const appRouter = createHashRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "payment", element: <Payment /> },
      { path: "form/volunteer", element: <FormVolunteer /> },
      { path: "form/partner", element: <FormPartner /> },
      { path: "form/submit", element: <FormSubmit /> },
      {path: "news/:id", element: <NewsItem />},
      {path: "reports", element: <Reports/>},
      {path: "foundings", element: <Foundings/>},
      {
        path: "admin",
        element: <ProtectedRoute />,
        children: [
          { index: true, element: <AdminPanel /> }, // Головна сторінка адмінки
          
          { path: "news", element: <NewsList /> }, // Сторінка зі списком новин
          { path: "news/create", element: <CreateNewsForm /> }, // Сторінка створення новини
          { path: "news/update/:id", element: <UpdateNewsForm/> }, // Сторінка оновлення новини

          { path: "projects", element: <ProjectsList /> }, // Сторінка проектів
          { path: "projects/create", element: <CreateProjectForm /> }, // Сторінка створення новини


          { path: "volunteers", element: <VolunteersList /> }, // Сторінка проектів
          { path: "volunteers/create", element: <CreateFormVolunteer /> }, // Сторінка створення новини

          { path: "partners", element: <PartnersList /> }, // Сторінка проектів
          { path: "partners/create", element: <CreateFormPartner /> }, // Сторінка створення новини

          { path: "profile", element: <Profile /> }, // Профіль

          { path: "allowed_emails", element: <AllowedEmailList /> }, // Дозволені пошти

          { path: "documents/create", element: <CreateDocuments /> }, // Документи створення
          { path: "documents", element: <DocumentsList /> }, // Документи створення


          { path: "users", element: <UsersList /> },
          { path: "donations", element: < DonatesList/> }, 


        ],
      },
      { path: "login", element: <Login /> },
      { path: "registration", element: <Registration /> },
    ],
  },
]);

export default appRouter;