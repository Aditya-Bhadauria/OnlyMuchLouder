import React from 'react';
import styled from 'styled-components';

const Card = () => {
    return (
      <StyledWrapper>
        <div className="card">
          <button className="mail">
            <svg
              className="lucide lucide-mail"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              height={24}
              width={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect rx={2} y={4} x={2} height={16} width={20} />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </button>
          <div className="profile-pic">
            {/* Add your profile image here */}
            <img src="your-profile-pic-url.jpg" alt="Profile" />
          </div>
          <div className="bottom">
            <div className="content">
              <span className="name">My Name</span>
              <span className="about-me">
                Lorem ipsum dolor sit amet consectetur adipisicinFcls
              </span>
            </div>
            <div className="bottom-bottom">
              <div className="social-links-container">
                {/* Social media icons */}
                <svg
                  viewBox="0 0 16 15.999"
                  height="15.999"
                  width={16}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    transform="translate(6 598)"
                    d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z"
                    data-name="Subtraction 4"
                    id="Subtraction_4"
                  />
                </svg>
                {/* More social icons here */}
              </div>
              <button className="button">Contact Me</button>
            </div>
          </div>
        </div>
      </StyledWrapper>
    );
  };
  

const StyledWrapper = styled.div`
  .card {
    width: 280px;
    height: 280px;
    background: white;
    border-radius: 32px;
    padding: 3px;
    position: relative;
    box-shadow: #604b4a30 0px 70px 30px -50px;
    transition: all 0.5s ease-in-out;
  }

  .card .mail {
    position: absolute;
    right: 2rem;
    top: 1.4rem;
    background: transparent;
    border: none;
  }

  .card .mail svg {
    stroke: #fbb9b6;
    stroke-width: 3px;
  }

  .card .mail svg:hover {
    stroke: #f55d56;
  }

  .card .profile-pic {
    position: absolute;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    top: 3px;
    left: 3px;
    border-radius: 29px;
    z-index: 1;
    border: 0px solid #fbb9b6;
    overflow: hidden;
    transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;
  }

  .card .profile-pic img {
    -o-object-fit: cover;
    object-fit: cover;
    width: 100%;
    height: 100%;
    -o-object-position: 0px 0px;
    object-position: 0px 0px;
    transition: all 0.5s ease-in-out 0s;
  }

  .card .profile-pic svg {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: 0px 0px;
    object-position: 0px 0px;
    transform-origin: 45% 20%;
    transition: all 0.5s ease-in-out 0s;
  }

  .card .bottom {
    position: absolute;
    bottom: 3px;
    left: 3px;
    right: 3px;
    background: #fbb9b6;
    top: 80%;
    border-radius: 29px;
    z-index: 2;
    box-shadow: rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px inset;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }

  .card .bottom .content {
    position: absolute;
    bottom: 0;
    left: 1.5rem;
    right: 1.5rem;
    height: 160px;
  }

  .card .bottom .content .name {
    display: block;
    font-size: 1.2rem;
    color: white;
    font-weight: bold;
  }

  .card .bottom .content .about-me {
    display: block;
    font-size: 0.9rem;
    color: white;
    margin-top: 1rem;
  }

  .card .bottom .bottom-bottom {
    position: absolute;
    bottom: 1rem;
    left: 1.5rem;
    right: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card .bottom .bottom-bottom .social-links-container {
    display: flex;
    gap: 1rem;
  }

  .card .bottom .bottom-bottom .social-links-container svg {
    height: 20px;
    fill: white;
    filter: drop-shadow(0 5px 5px rgba(165, 132, 130, 0.1333333333));
  }

  .card .bottom .bottom-bottom .social-links-container svg:hover {
    fill: #f55d56;
    transform: scale(1.2);
  }

  .card .bottom .bottom-bottom .button {
    background: white;
    color: #fbb9b6;
    border: none;
    border-radius: 20px;
    font-size: 0.6rem;
    padding: 0.4rem 0.6rem;
    box-shadow: rgba(165, 132, 130, 0.1333333333) 0px 5px 5px 0px;
  }

  .card .bottom .bottom-bottom .button:hover {
    background: #f55d56;
    color: white;
  }

  .card:hover {
    border-top-left-radius: 55px;
  }

  .card:hover .bottom {
    top: 20%;
    border-radius: 80px 29px 29px 29px;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
  }

  .card:hover .profile-pic {
    width: 100px;
    height: 100px;
    aspect-ratio: 1;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    z-index: 3;
    border: 7px solid #fbb9b6;
    box-shadow: rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px;
    transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
  }

  .card:hover .profile-pic:hover {
    transform: scale(1.3);
    border-radius: 0px;
  }

  .card:hover .profile-pic img {
    transform: scale(2.5);
    -o-object-position: 0px 25px;
    object-position: 0px 25px;
    transition: all 0.5s ease-in-out 0.5s;
  }

  .card:hover .profile-pic svg {
    transform: scale(2.5);
    transition: all 0.5s ease-in-out 0.5s;
  }`;

export default Card;
