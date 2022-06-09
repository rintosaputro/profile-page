import React from 'react';
import HeaderProfile from './Header';

import Layout from '../../components/Layout';
import '../../assets/styles/profile/profile.scss';
import Aside from './Aside';

const Profile = () => (
  <Layout>
    <div className="profile-page">
      <HeaderProfile />
      <div className="row">
        <div className="col-5">
          <Aside />
        </div>
        <section className="col-7">
          section
        </section>
      </div>
    </div>
  </Layout>
);

export default Profile;
