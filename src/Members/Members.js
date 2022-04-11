import React from 'react';
import Table from '../Components/Table';
import memberData from '../Json/Members.json';

const Members = () => {
  const members = memberData.members;
  const header = Object.keys(members[0]);
  const body = [];
  members.forEach((member) => {
    body.push([member.id, member.first_name, member.last_name, member.email, member.team.id])
  })
  return (
    <Table tableHeader={header} tableBody={body} />
  )
}

export default Members;