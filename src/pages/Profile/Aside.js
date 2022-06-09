import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { VscListFlat } from 'react-icons/vsc';
import ListPost from '../../components/ListPost';

import point from '../../assets/images/point.png';
import Button from '../../components/Button';
import profile from '../../data-dummy/profile';

import { ReactComponent as Idea } from '../../assets/icons/idea.svg';
import { ReactComponent as Artikel } from '../../assets/icons/artikel.svg';
import { ReactComponent as Polling } from '../../assets/icons/polling.svg';
import { ReactComponent as Petisi } from '../../assets/icons/petisi.svg';

const Aside = () => {
  const [showMenuPost, setShowMenuPost] = useState(false);
  const listPost = [
    { icon: Idea, text: 'Idea' },
    { icon: Artikel, text: 'Artikel' },
    { icon: Polling, text: 'Polling' },
    { icon: Petisi, text: 'Petisi' },
  ];

  const handleShowMenuPost = () => {
    if (showMenuPost) {
      setShowMenuPost(false);
    } else {
      setShowMenuPost(true);
    }
  };

  return (
    <aside>
      <section className="card shadow rounded mt-4 p-3 d-flex flex-row justify-content-between align-items-center">
        <div className="d-flex flex-row align-items-center">
          <img src={point} alt="point" className="point me-4" />
          <div className="ms-3">
            <h4 className="text-primary">Total Point Anda</h4>
            <span className="text-muted">
              <span className="text-success fw-bold">{profile.points}</span>
              {' '}
              klaim hadiah
            </span>
          </div>
        </div>
        <div className="text-muted fs-2">
          <FiChevronRight />
        </div>
      </section>
      <section className="card shadow px-4 py-3 mt-4 text-center">
        <p className="text-completeness mb-0">
          Melengkapi profil membantu kami memvalidasi akun
          Anda dan memudahkan Opinian lainnya memahami Anda
        </p>
        <label className="my-3 text-muted">
          Lengkapi Profil Anda
          {' '}
          {profile.profileCompleteness}
          /8
        </label>
        <meter id="completeness" value={profile.profileCompleteness} min={0} max={8} className="completeness w-100 bg-primary" />
      </section>
      <div className="mt-4">
        <Button rounded event={handleShowMenuPost}>
          <svg width="34" height="46" viewBox="0 0 34 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9954 32.1408C13.9411 32.1408 14.7077 31.3529 14.7077 30.3809C14.7077 29.409 13.9411 28.6211 12.9954 28.6211C12.0498 28.6211 11.2832 29.409 11.2832 30.3809C11.2832 31.3529 12.0498 32.1408 12.9954 32.1408Z" fill="#FEFEFE" />
            <path d="M31.1654 16.4276C28.7387 19.3649 26.2135 21.7831 23.602 23.7202C20.9906 25.6699 18.2805 27.1259 15.4966 28.1134C15.1763 28.2274 14.8314 28.0501 14.7205 27.721C14.6713 27.569 14.6713 27.4171 14.7205 27.2905C16.4082 22.011 18.6254 17.2506 21.3601 13.0092C21.3724 12.9839 21.3847 12.9713 21.3971 12.9459C21.6065 12.6168 21.8282 12.2876 22.0499 11.9584C25.1049 7.42587 28.7634 3.48839 33.0132 0.133311C33.2842 -0.0819206 33.6661 -0.0312779 33.8755 0.247257C33.9617 0.361204 34.011 0.513132 33.9986 0.652399C33.974 1.45002 33.974 2.33627 33.974 3.27316C33.9863 6.59026 34.011 10.4011 32.3726 12.2116C31.3872 13.3004 29.638 13.7942 27.7779 13.9841C29.0097 14.3892 30.1061 14.8704 31.0299 15.4907C31.3133 15.6806 31.3995 16.0731 31.2147 16.3643C31.2024 16.3896 31.1901 16.4023 31.1654 16.4276ZM22.8876 22.6947C25.2404 20.9475 27.5316 18.7825 29.7488 16.1744C28.8619 15.6806 27.8026 15.2882 26.6323 14.959C25.265 14.5665 23.7498 14.2626 22.1854 14.0094C19.8203 17.757 17.8494 21.897 16.2973 26.4549C18.5515 25.5433 20.7442 24.2899 22.8876 22.6947ZM23.06 12.6674L22.9984 12.756C25.7331 12.9206 29.9583 13.0219 31.4734 11.3507C32.7791 9.90736 32.7668 6.36237 32.7545 3.27316C32.7545 2.81738 32.7422 2.37425 32.7545 1.95645C29.0344 5.04566 25.7947 8.61597 23.06 12.6674Z" fill="#FEFEFE" />
            <path d="M0.923871 39.3589C0.406503 39.3589 0 38.9411 0 38.4093C0 37.8903 0.406503 37.4598 0.923871 37.4598H5.61714V32.6361C5.61714 32.1043 6.03596 31.6865 6.54101 31.6865C7.04606 31.6865 7.46488 32.1043 7.46488 32.6361V37.4598H12.1581C12.6755 37.4598 13.082 37.8903 13.082 38.4093C13.082 38.9411 12.6755 39.3589 12.1581 39.3589H7.46488V44.1953C7.46488 44.7144 7.04606 45.1448 6.54101 45.1448C6.03596 45.1448 5.61714 44.7144 5.61714 44.1953V39.3589H0.923871Z" fill="#FEFEFE" />
          </svg>
          <span className="ms-2">Buat Postingan</span>
        </Button>
      </div>
      <section className={`card shadow mt-2 ${showMenuPost ? 'd-flex' : 'd-none'}`} id="listPost">
        <ul className="px-0 py-2 mb-0">
          <li className="list-post-section px-3">
            <ListPost Icon={VscListFlat} text="Semua" mainList />
          </li>
          {listPost.map(({ icon, text }) => (
            <li className="list-post-section px-3" key={text}>
              <ListPost Icon={icon} text={text} />
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Aside;
