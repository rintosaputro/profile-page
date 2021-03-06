import React from 'react';

import { AiFillCamera, AiTwotoneDelete } from 'react-icons/ai';

import profile from '../../data-dummy/profile';
import HeaderBottom from './HeaderBottom';

const HeaderProfile = () => {
  const {
    fullName, followings, followers, about, background, photoProfile, post,
  } = profile;

  const infoProfile = [
    { title: 'Postingan', total: post.totalPost },
    { title: 'Mengikuti', total: followings },
    { title: 'Pengikut', total: followers },
  ];

  return (
    <header className="shadow rounded">
      <div style={{ backgroundImage: `url(${background})`, height: '314px' }} className="background d-flex align-items-end position-relative">
        <div className="header-top row mx-1 mx-sm-4 position-absolute">
          <div className="col-4 col-md-3 col-lg-2">
            <div className="img-section position-relative">
              <img src={photoProfile} alt="profile" className="img-fluid img-profile rounded-pill" />
              <form className="file position-relative">
                <label className="change-photo-icon badge bg-light rounded-pill p-lg-2 position-absolute bottom-0" htmlFor="file">
                  <AiFillCamera size={33} className="text-secondary header-icon" />
                </label>
                <input type="file" id="file" className="file-input bg-danger position-absolute start-0" />
              </form>
            </div>
          </div>
          <div className="header-middle col-8 col-md-9 col-lg-10">
            <div className="info-container d-flex flex-row justify-content-between align-items-end">
              <div className="info-profile">
                <div className="row">
                  {infoProfile.map(({ title, total }) => (
                    <div className="col-4 text-center" key={title}>
                      <div className="info-title fw-bold text-muted">{title}</div>
                      <div className="mt-2 fw-bold">{total}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="change-background-container d-flex flex-row align-items-start pb-1">
                <form className="file position-relative">
                  <label className="change-background badge rounded-pill p-2" htmlFor="file">
                    <AiFillCamera size={33} className="icon" />
                  </label>
                  <input type="file" id="file" className="file-input bg-danger position-absolute start-0" />
                </form>
                <button className="change-background btn rounded-pill ms-3 p-2" type="button">
                  <AiTwotoneDelete size={33} className="icon" />
                </button>
              </div>
            </div>
            <div className="d-none d-md-flex">
              <HeaderBottom fullName={fullName} about={about} />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex d-md-none p-5">
        <HeaderBottom fullName={fullName} about={about} />
      </div>
      <div className="d-none d-md-flex header-bottom" />
    </header>
  );
};

export default HeaderProfile;
