import React from 'react';
import Table from '../Components/Table';
import memberData from '../Json/Members.json';

const Members = () => {
  const members = memberData.members;
  const header = Object.keys(members[0]);
  let body = [];
  let teams = [];
  members.forEach((member) => {
    body.push([member.id, member.first_name, member.last_name, member.email])
    teams.push(member.team);
  })
  return (
    <Table tableHeader={header} tableBody={body} teams={teams} />
  )
}

export default Members;