import React from 'react';
import AdmHeaderContainer from '../../components/AdmManageHeader/styles';
import FormAdmManager from '../../components/AdmManageForm';
import AdmManageContainer from './styles';
import AdmManageUserList from '../../components/AdmManageUserList';

export default function AdmManage() {
  return (
    <AdmManageContainer>
      <AdmHeaderContainer />
      <div className="content">
        <FormAdmManager />
        <AdmManageUserList />
      </div>
    </AdmManageContainer>
  );
}
