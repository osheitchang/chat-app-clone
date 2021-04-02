import React from 'react'

let User = (props) => {
    return (
        <div className="user-profile">
            <h1>{props.name}</h1>
            <h2>Status</h2> 
            <img className="profile-image" src=""></img>   
        </div>
        

    )

}

export default User