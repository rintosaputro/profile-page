import React from 'react';
import '../assets/styles/listPost.scss';

const ListPost = ({ Icon, text, mainList }) => (
  <button type="button" className={`${mainList ? 'btn-list btn-main btn d-flex flex-row align-items-center w-100' : 'btn-list btn d-flex flex-row align-items-center w-100'}`}>
    <div className="icon-container rounded">
      <Icon />
    </div>
    <span className="ms-3">{text}</span>
  </button>
);

export default ListPost;
