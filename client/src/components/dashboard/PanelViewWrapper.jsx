import React, {Component} from 'react';
import { connect } from 'react-redux';

import AddTeamForm from './teams/addTeamForm.jsx';
import TeamTable from './teams/teamTable.jsx';

import AddPlayerForm from './players/addPlayerForm.jsx';
import TeamRoster from './players/roster.jsx';

import AddStaffForm from './settings/main.jsx';



// Panel view wrapper determines which view is currently active
// and renders the appropriate panel in response
export default class PanelViewWrapper extends Component {

	render() {
		const { view, league, roster, teams } = this.props;
		
		switch (view) {
			case 'AddTeam':
				return <AddTeamForm league={league} />;
			case 'EditActiveTeam':
				return (
					<TeamTable
						action="edit" 
						teams={league.active_teams} 
						title="Active Teams"
					/>
				);
			case 'EditArchivedTeam':
				return (
					<TeamTable 
						action="edit" 
						teams={league.archived_teams} 
						title="Archived Teams"
					/>
				);
			case 'DeleteTeam':
				return (
					<TeamTable 
						action="delete"
						title="Delete Teams" 
						teams={teams}
					/>
				);

			case 'AddStaff':
				return <AddStaffForm league={league}/>;	

			case 'AddPlayer':
				return <AddPlayerForm league={league} roster={roster} />;
		
			case 'ViewRoster':
				return <TeamRoster teams={teams} roster={roster} />		
			default:
				return <noScript />;
			}
		}
}


