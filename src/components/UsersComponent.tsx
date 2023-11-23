import { User, Users } from "../models";
import UserComponent from "./UserComponent";

interface IProps {
  users: Users;
}

function UsersComponent(props: IProps = { users: [] }) {
  const EmptyList = () => <h1>No Any User Exists</h1>;
  const UsersList = () => (
    <>
      <div className="w-full flex flex-wrap gap-2 p-2">
        {props.users.map((user: User) => (
          <UserComponent user={user} key={user.id.value} />
        ))}
      </div>
    </>
  );

  return !props.users.length ? EmptyList() : UsersList();
}

export default UsersComponent;
