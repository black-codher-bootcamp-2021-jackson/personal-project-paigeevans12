import React from "react";
import "../styles/profile.css";

function Profile() {
  return (
    <>
    <h1 className="heading">Your Profile</h1>
      <div class="card">
        {/* <h1>`${this.state.firstName}`</h1> */}
        <div className="avatar">
          <img className="avatarImg" src="https://1.bp.blogspot.com/-YHtBrQSz77w/X1icjNjxz_I/AAAAAAAAZJU/uOzyiRvzGa8zcm0fx5RPCY7pMTSfnArvgCLcBGAsYHQ/s1600/sailor-moon.jpg"/>
        </div>
        <h1 className="username">Paige Evans</h1>
        <p class="title">Example Profile</p>
        <hr class="between" />
        <div className="userInfo">
          <h3 className="profileSubtext">Plays On:</h3>
          <p>PS4, PS5, Nintendo Switch</p>
          <h3 className="profileSubtext">Gamer Tags:</h3>
          <p>Paige1201, PaigeeyK</p>
          <p><button className="shareButton">Share Profile</button></p>
        </div>
      </div>
      {/* <h2>Games You've Played:</h2> */}
    </>
  );
}

export default Profile;