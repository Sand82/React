import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = ({ users }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((x) => (
          <li key={x.id}>
            {x.name} ({x.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
