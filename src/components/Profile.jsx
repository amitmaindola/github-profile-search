import React from 'react'

function Profile(props) {
  return (
    <div style={{border: '1px solid #444', padding: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 5, marginTop: 10}}>
      <img src={props.image} height={60} width={60} alt="" />
      <a href={props.url} style={{marginTop:10, fontSize: 20}}>{props.id}</a>
    </div>
  )
}

export default Profile