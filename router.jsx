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
} from "./src/pages/page";
import LayoutComponent from "./src/components/Layout.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <DashBoardPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/product/create",
        element: <CreateProductPage />,
      },
      {
        path: "/product/edit/:id",
        element: <EditProductPage />,
      },
      {
        path: "/sale",
        element: <SalePage />,
      },
      {
        path: "/voucher",
        element: <VoucherPage />,
      },
      {
        path: "/voucher/details/:id",
        element: <VoucherDetailsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
