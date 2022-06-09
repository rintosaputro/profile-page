import React from 'react';
import HeaderProfile from './Header';

import Layout from '../../components/Layout';
import '../../assets/styles/profile/profile.scss';

const Profile = () => (
  <Layout>
    <div className="profile-page">
      <HeaderProfile />
    </div>
  </Layout>
);

export default Profile;
