import { createHashRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import { MainPage } from "@/pages/main";
import { Payment } from "@/pages/payment";
import { Form } from "@/widgets/form";
import { FormSubmit } from "@/pages/form";
// import { NewsPage } from "@/pages/news";

export const appRouter = createHashRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error page</div>,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/payment", element: <Payment /> },
      { path: "form", element: <Form /> },
      { path: "form/submit", element: <FormSubmit /> },
    ],
  },
]);