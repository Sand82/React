import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Event";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import MainNavigation from "./components/MainNavigation";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";

// Challenge / Exercise

// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/events",
        element: <EventsRootLayout />,
        children: [
          {
            path: "/",
            element: <EventsPage />,
          },
          {
            path: "/:eventId",
            element: <EventDetailPage />,
          },
          {
            path: "/new",
            element: <NewEventPage />,
          },
          {
            path: "/:eventId/edit",
            element: <EditEventPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
