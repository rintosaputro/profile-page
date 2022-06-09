import React from 'react';

import { FiSearch } from 'react-icons/fi';
import { RiMenu3Fill } from 'react-icons/ri';

import logo from '../assets/images/logo.png';
import home from '../assets/images/home.png';
import group from '../assets/images/group.png';
import message from '../assets/images/message.png';
import notification from '../assets/images/notification.png';
import profile from '../assets/images/profile.jpg';

import '../assets/styles/navigation.scss';

const Navigation = () => {
  const navList = [
    { image: home, alt: 'home', navigate: 'home' },
    { image: group, alt: 'group', navigate: 'group' },
    { image: message, alt: 'message', navigate: 'message' },
    {
      image: notification, alt: 'notification', navigate: 'notification', notif: true,
    },
    { image: profile, alt: 'profile', navigate: 'profile' },
  ];

  return (
    <nav className="navbar fixed-top bg-white navbar-expand-lg navbar-light mb-2 px-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img className="logo btn-fluid" src={logo} alt="logo" />
        </a>
        <form className="nav-form d-none d-lg-flex position-relative">
          <input className="form-control ps-4 me-2" type="search" placeholder="Cari..." aria-label="Search" />
          <button className="btn pe-4 me-2 text-muted position-absolute end-0" type="submit" aria-label="Search"><FiSearch /></button>
        </form>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="icon-menu bold text-primary fs-2">
            <RiMenu3Fill />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            {navList.map(({
              image, alt, navigate, notif,
            }) => (
              <li className="nav-item bg-light ms-lg-3 my-3 d-flex justify-content-center align-items-center" key={navigate}>
                <a className={`nav-link position-relative ${alt === 'profile' && 'p-0'}`} aria-current="page" href={navigate}>
                  <img src={image} className={`img-fluid ${alt === 'profile' && 'rounded-circle profile'}`} alt={alt} />
                  {notif && <span className="position-absolute top-75 start-75 translate-middle p-2 bg-danger border border-light rounded-circle" />}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
