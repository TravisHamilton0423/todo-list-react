import React from 'react';
import Table from '../Components/Table';
import memberData from '../Json/Members.json';

const Team = (props) => {
  const { id } = props.match.params;
  let members = memberData.members.filter((member) => member.team.id == id);
  let header = Object.keys(members[0]);
  let body = [];
  members.forEach((member) => {
    body.push([member.id, member.first_name, member.last_name, member.email, member.team.name]);
  })

  return (
    <React.Fragment>
      <Table tableBody={body} tableHeader={header} />
    </React.Fragment>
  )
}

export default Team;