import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { AppointmentService } from "../components/appointment/indexAppointment";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/appoinment",
    element: <AppointmentService />,
  },
]);
