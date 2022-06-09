/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BiDotsHorizontal } from 'react-icons/bi';

import { FaUser, FaRegLaughSquint } from 'react-icons/fa';
import { RiLightbulbLine, RiMessage3Line } from 'react-icons/ri';
import { FiEye, FiSend } from 'react-icons/fi';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { TbRepeat } from 'react-icons/tb';

import profile from '../data-dummy/profile';
import timePost from '../helper/timePost';

import '../assets/styles/postSection.scss';

const Post = ({ photoProfile, name, post }) => {
  const [fullContent, setFullContent] = useState(false);
  // const { photoProfile, name, post } = profile;
  const {
    title, contents, image, likes, emotes, comments, views, reposts, createdAt, category,
  } = post;

  const interactions = [
    { Icon: RiLightbulbLine, total: likes },
    { Icon: FaRegLaughSquint, total: emotes },
    { Icon: RiMessage3Line, total: comments },
    { Icon: FiEye, total: views },
    { Icon: TbRepeat, total: reposts },
  ];
  return (
    <article className="post-section card shadow rounded mb-5">
      <div className="row p-3 align-items-center">
        <div className="col-1 me-3">
          <img src={photoProfile} alt="profile" className="img-profile rounded-pill" />
        </div>
        <div className="col d-flex flex-row justify-content-between align-items-center">
          <div>
            <div className="mb-2 fw-bold h5">{name}</div>
            <span className="text-muted">{timePost(createdAt)}</span>
            <span className="fw-bold text-primary ps-1">{category}</span>
          </div>
          <div>
            <button className="btn option-post text-muted" type="button">
              <BiDotsHorizontal size={25} />
            </button>
          </div>
        </div>
      </div>
      <h5 className="p-3">{title}</h5>
      <div className="position-relative">
        <img src={image} alt={title} className="img-fluid mx-auto" />
        <div className="icon-tag position-absolute rounded-pill bg-white d-flex align-items-center justify-content-center">
          <FaUser />
        </div>
      </div>
      {(contents.length <= 250 || fullContent)
        ? <p className="p-4 m-0">{contents}</p>
        : (
          <p className="p-4 m-0">
            {`${contents.substring(0, 250)}...`}
            <button className="btn text-primary" onClick={setFullContent} type="button">Selengkapnya</button>
          </p>
        )}
      <div className="px-4 pb-3 d-flex flex-row border-bottom">
        {interactions.map(({ Icon, total }) => (
          <div className="text-muted my-auto" key={total}>
            <Icon size={30} />
            <span className="ms-1 me-4">{total}</span>
          </div>
        ))}
        <div className="ms-auto">
          <AiOutlineShareAlt size={30} className="text-muted" />
        </div>
      </div>
      <form className="px-4 positon-relative my-3">
        <label className="img-comment position-absolute">
          <img src={photoProfile} alt="profile" className="img-user-comment rounded-pill" />
        </label>
        <input placeholder="Tulis Komentar" className="form-control rounded-pill" type="text" />
        <button className="btn-send btn btn-primary position-absolute rounded-pill p-0 text-white" type="button">
          <FiSend size={15} />
        </button>
      </form>
    </article>
  );
};

export default Post;
