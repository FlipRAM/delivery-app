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
      <section>
        {userList.length && userList.map((each, i) => (
          <span key={ each.name + i }>
            {each.name}
          </span>
        ))}
      </section>

    </UserListContainer>
  );
}
