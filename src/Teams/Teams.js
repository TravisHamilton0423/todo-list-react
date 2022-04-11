import React from 'react';
import Table from '../Components/Table';
import teamData from '../Json/Teams.json';

const teams = teamData.teams;

const Teams = () => {
  const header = Object.keys(teams[0]);
  let body = [];
  teams.map((team) => {
    let arr = [];
    header.map((key) => arr.push(team[key]));
    body.push(arr);
  })
  return (
    <Table tableBody={body} tableHeader={header} />
  )
}

export default Teams;