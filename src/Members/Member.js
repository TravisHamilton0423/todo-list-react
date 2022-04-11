import React from 'react';

const Member = ({
  member
}) => {
  return (
    <div>
      <h2>{member.id}</h2>
      <h2>{member.first_name}</h2>
      <h2>{member.last_name}</h2>
      <h2>{member.email}</h2>
      <h2>{member.team.id}</h2>
      <h2>{member.team.name}</h2>
    </div>
  )
}

export default Member;