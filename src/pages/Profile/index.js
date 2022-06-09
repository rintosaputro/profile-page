import React from 'react';
import HeaderProfile from './Header';

import '../../assets/styles/profile/profile.scss';

import Layout from '../../components/Layout';
import Aside from './Aside';
import Post from '../../components/Post';

import profile from '../../data-dummy/profile';

const Profile = () => {
  const { photoProfile, fullName, post } = profile;
  return (
    <Layout>
      <div className="profile-page">
        <HeaderProfile />
        <div className="row">
          <div className="col-12 col-md-5">
            <Aside />
          </div>
          <section className="col-12 col-md-7 mt-4">
            {post?.posts.map((data) => (
              <div key={data.id}>
                <Post photoProfile={photoProfile} name={fullName} post={data} />
              </div>
            ))}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
