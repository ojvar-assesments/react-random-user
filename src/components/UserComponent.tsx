import { User } from "../models";
import "./UserComponent.css";

interface IProps {
  user: User;
  [key: string]: any;
}

function UserComponent({ user }: IProps) {
  const {
    name: { first, last },
    picture: { large: image },
    nat,
  } = user;

  return (
    <div className="w-64 rounded overflow-hidden shadow-lg w-1/4 user-card">
      <img
        className="w-full"
        src={image}
        alt="Random User"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{nat}</div>
        <p className="text-gray-700 text-base">{first} {last}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #user
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #random
        </span>
      </div>
    </div>
  );
}

export default UserComponent;
