import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Some event",
  },
  {
    id: "e2",
    title: "Another event",
  },
];

const EventsPage = () => {
  return (
    <>
      <h1>Event Page</h1>
      <ul>
        {DUMMY_EVENTS.map((x) => (
          <li key={x.id}>
            <Link to={`/events/${x.id}`}>{x.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
