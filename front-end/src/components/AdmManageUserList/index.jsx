import React, { useEffect, useState } from 'react';
import { getUserFromLocalStorage } from '../../Context/LocalStorage';
import { getUserListApi } from '../../services/API';
import UserListContainer from './styles';

export default function AdmManageUserList() {
  const [userList, setUserList] = useState([]);

  const [user, setUser] = useState({});

  useEffect(() => {
    if (getUserFromLocalStorage('user') && !user.token) {
      setUser(getUserFromLocalStorage('user'));
    }
  }, [user]);

  useEffect(() => {
    (async () => {
      if (!userList.length) {
        const data = await getUserListApi(user.Token);
        setUserList(data);
        console.log(data);
      }
    })();
  }, [user.Token, userList.length]);

  return (
    <UserListContainer>
      <section className="user-list-container">
        {userList.length && userList.map((each, i) => (
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
            >
              {each.name}
            </button>

          </aside>
        ))}
      </section>
    </UserListContainer>
  );
}
