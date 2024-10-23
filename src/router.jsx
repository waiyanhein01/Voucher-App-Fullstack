import { createBrowserRouter } from "react-router-dom";
import {
  AboutPage,
  CreateProductPage,
  DashBoardPage,
  EditProductPage,
  NotFoundPage,
  ProductPage,
  SalePage,
  VoucherPage,
  VoucherDetailsPage,
  LoginPage,
  RegisterPage,
  ChangePasswordPage,
  ChangeUserNamePage,
} from "./pages/page";
import LayoutComponent from "./components/Layout.component";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/dashboard",
        element: <LayoutComponent />,
        children: [
          {
            index: true,
            element: <DashBoardPage />,
          },
          {
            path: "change-password",
            element: <ChangePasswordPage />,
          },
          {
            path: "change-username",
            element: <ChangeUserNamePage />,
          },
          {
            path: "products",
            element: <ProductPage />,
          },
          {
            path: "products/create",
            element: <CreateProductPage />,
          },
          {
            path: "products/edit/:id",
            element: <EditProductPage />,
          },
          {
            path: "sale",
            element: <SalePage />,
          },
          {
            path: "vouchers",
            element: <VoucherPage />,
          },
          {
            path: "vouchers/details/:id",
            element: <VoucherDetailsPage />,
          },
          {
            path: "about",
            element: <AboutPage />,
          },
        ]
      },
    ],
  },
]);

export default router;
