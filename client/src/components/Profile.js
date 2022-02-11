import React from "react";
import "../styles/profile.css";

function Profile() {
  return (
    <>
      <div class="card">
  {/* <h1>`${this.state.firstName}`</h1> */}
  <h1>Paige Evans</h1>
  <p class="title">Example Profile</p>
  <p>Plays On:
    <br/>
    PS4, PS5, Nintendo Switch</p>
    <p>Gamer Tags: Paige1201, PaigeeyK</p>
  <p><button className="share-button">Share Profile</button></p>
</div>
      {/* render list of db games */}
    </>
  );
}

export default Profile;