import React from 'react';
import Table from '../Components/Table';
import teamData from '../Json/Teams.json';

const teams = teamData.teams;

const Teams = () => {
  const header = Object.keys(teams[0]);
  let body = teams.reduce((result, team) => [...result, header.map((key) => team[key])], []);
  return (
    <Table tableBody={body} tableHeader={header} />
  )
}

export default Teams;