import React, { useEffect, useState } from 'react';
import { getUserFromLocalStorage } from '../../Context/LocalStorage';
import { getUserListApi, removeUserApi } from '../../services/API';
import UserListContainer from './styles';

export default function AdmManageUserList() {
  const [userList, setUserList] = useState([]);

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    if (getUserFromLocalStorage('user') && !user) {
      setUser(getUserFromLocalStorage('user'));
    }
  }, [user]);

  useEffect(() => {
    (async () => {
      if (!userList.length && user) {
        const data = await getUserListApi(user);
        setUserList(data);
      }
    })();
  }, [user, userList]);

  const handleToRemoveUser = async (event) => {
    console.log(event.target.value, typeof user.token);
    const data = await removeUserApi(event.target.value, user.token);
    console.log(data);
  };

  return (
    <UserListContainer>
      <section className="user-list-container">
        {userList.length && userList.map((each, i) => each.role !== 'administrator'
          && (
            <aside key={ each.name + i } className="user-card-container">
              <span
                data-testid={ `admin_manage__element-user-table-item-number-${i}` }
              >
                {i + 1}
              </span>

              <span
                data-testid={ `admin_manage__element-user-table-name-${i}` }
              >
                {each.name}
              </span>

              <span
                data-testid={ `admin_manage__element-user-table-email-${i}` }
              >
                {each.email}
              </span>

              <span
                data-testid={ `admin_manage__element-user-table-role-${i}` }
              >
                {each.role}
              </span>

              <button
                data-testid={ `admin_manage__element-user-table-remove-${i}` }
                type="button"
                value={ each.id }
                onClick={ handleToRemoveUser }
              >
                {each.name}
              </button>

            </aside>

          ))}
      </section>
    </UserListContainer>
  );
}
