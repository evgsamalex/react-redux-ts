import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const UserList: React.FC = () => {
  const { users, loading, error } = useTypedSelector(state => state.user);

  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Загрузка пользователей</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
