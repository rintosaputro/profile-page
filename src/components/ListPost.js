import React from 'react';
import '../assets/styles/listPost.scss';

const ListPost = ({ Icon, text }) => (
  <button type="button" className="btn-list btn d-flex flex-row align-items-center w-100">
    <div className="icon-container rounded">
      <Icon />
    </div>
    <span className="ms-3">{text}</span>
  </button>
);

export default ListPost;
