import React from "react";
import "../styles/profile.css";

function Profile() {
  return (
    <>
      <div class="card">
        {/* <h1>`${this.state.firstName}`</h1> */}
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
      {/* render list of db games */}
    </>
  );
}

export default Profile;