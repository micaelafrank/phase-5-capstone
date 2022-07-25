import React from "react";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

function Profile({ user }) {
    // const { username, fullname } = user;
    console.log(user)
    // console.log({username})
    return (
        <div className="profileContainer">
            <div className="heading-container">
                <div id="profileIcon">
                    <AccountCircleTwoToneIcon />
                    {/* <AccountCircleOutlinedIcon /> */}
                </div>
                <div className="profile-heading">
                    <h2>@{user.username}</h2>
                </div>
            </div>
            <h3>Welcome!</h3>
        </div>
    )
}

export default Profile;