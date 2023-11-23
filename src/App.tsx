import { useEffect, useMemo, useState } from "react";
import { UserService } from "./services";
import { User, Users } from "./models";
import UsersComponent from "./components/UsersComponent";
import AlertComponent from "./components/AlertComponent";

const userService = new UserService();

function App() {
  const [alertMessage, setAlertMessage] = useState("");
  const [users, setUsers] = useState<Users>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [buttonText] = useMemo(() => {
    if (isLoading) {
      return [
        "Processing...",
      ];
    } else {
      return ["Random User"];
    }
  }, [isLoading]);

  async function addRandomUser() {
    setIsLoading(true);

    const newUser: User = await userService.fetchRandomUser();
    const oldUser = users.find((u) => u.id.value === newUser.id.value);
    if (!oldUser) {
      setUsers([...users, newUser]);
    } else {
      setAlertMessage(
        `User ${oldUser.name.first} ${oldUser.name.last} already imported`,
      );
      setTimeout(() => {
        setAlertMessage("");
      }, 1000);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    addRandomUser();
  }, []);

  return (
    <>
      <button
        className="btn btn-blue"
        onClick={addRandomUser}
        type="button"
        disabled={isLoading}
      >
        {buttonText}
      </button>
      {alertMessage && (
        <AlertComponent
          title="Warning"
          message={alertMessage}
        />
      )}
      <UsersComponent users={users} />
    </>
  );
}

export default App;
