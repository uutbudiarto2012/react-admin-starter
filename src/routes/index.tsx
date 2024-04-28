import AdminLayout from "@/layouts/AdminLayout";
import AuthLayout from "@/layouts/AuthLayout";
import RootLayout from "@/layouts/RootLayout";
import ApplicantPage from "@/pages/applicant";
import CreateApplicantPage from "@/pages/applicant/create";
import LoginPage from "@/pages/auth/login";
import DashboardPage from "@/pages/dashboard";
import EmployeePage from "@/pages/employee";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: < RootLayout />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          {
            path: '/',
            element: <DashboardPage />
          },
          {
            path: '/employee',
            element: <EmployeePage />
          },
          {
            path: '/applicant',
            element: <ApplicantPage />
          },
          {
            path: '/applicant/create',
            element: <CreateApplicantPage />
          }
        ]
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <LoginPage />
          }
        ]
      }
    ]
  },
])

export default router