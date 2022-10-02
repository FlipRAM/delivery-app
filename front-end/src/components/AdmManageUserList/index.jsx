import React, { useContext, useEffect, useState } from 'react';
import { useAppContext } from '../../Context/APIProvider';
import { getUserFromLocalStorage } from '../../Context/LocalStorage';
import { getUserListApi, removeUserApi } from '../../services/API';
import UserListContainer from './styles';

export default function AdmManageUserList() {
  const { userList, setUserList } = useContext(useAppContext);

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    if (getUserFromLocalStorage('user') && !user) {
      setUser(getUserFromLocalStorage('user'));
    }
  }, [user]);

  useEffect(() => {
    (async () => {
      if (!userList && user) {
        const data = await getUserListApi(user.id);
        console.log(data);
        setUserList(data.data);
      }
    })();
  }, [setUserList, user, userList]);

  const handleToRemoveUser = async (event) => {
    const data = await removeUserApi(event.target.value, user.token);
    console.log(data);
    setUserList(data.data);
  };

  return (
    <UserListContainer>
      <section className="user-list-container">
        {userList && userList.map((each, i) => each.role !== 'administrator'
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
