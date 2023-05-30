import { json, useRouteLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export default EventDetailPage;

export async function loader({ request, params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch data from selected item." },
      { status: 500 }
    );
  }

  return response;
}
