import React from 'react'

function Profile(props) {
  return (
    <div className='profile'>
      <img src={props.image} height={60} width={60} alt="" />
      <a href={props.url} style={{marginTop:10, fontSize: 20}}>{props.id}</a>
    </div>
  )
}

export default Profile