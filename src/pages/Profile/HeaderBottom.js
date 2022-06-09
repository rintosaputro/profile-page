import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import Button from '../../components/Button';

const HeaderBottom = ({ fullName, about }) => (
  <div className="row mt-4">
    <div className="col-12 col-lg-6">
      <div className="name-rating d-flex flex-row align-items-center">
        <h4 className="me-3 fw-bold">{fullName}</h4>
        <div>
          {[...Array(5)].map((_data, index) => (
            <span key={index}><AiOutlineStar size={25} className="text-warning" /></span>
          ))}
        </div>
      </div>
      <p className="about text-muted mt-3">
        {
            about.length > 100 ? (`${about.substring(0, 100)}..`) : about
          }
      </p>
    </div>
    <div className="btn-edit-profile col-lg-6 d-flex justify-content-end">
      <Button>Edit Profil</Button>
    </div>
  </div>
);

export default HeaderBottom;
