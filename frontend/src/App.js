import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/events", element: <EventsPage /> },
      { path: "./events/:eventId", element: <EventDetailPage /> },
      { path: "/events/new", element: <NewEventPage /> },
      { path: "/events/:eventId/edit", element: <EditEventPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
