import Users from "./Users";
import "../styles.css";

function UserCard({ user, onDelete }) {
  const { first_name, last_name, email, avatar } = user;
  return (
    <div>
      <section>
        <p>
          {first_name} {last_name}
        </p>
        <p>{email}</p>
        <img src={avatar} alt="user" />
        <button className="dismiss" onClick={() => onDelete(user)}>
          Dismiss
        </button>
      </section>
    </div>
  );
}
export default UserCard;
