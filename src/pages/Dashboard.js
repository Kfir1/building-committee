import React from 'react';
import CommitteeDashboard from '../components/CommitteeDashboard';
import TenantDashboard from '../components/TenantDashboard';
import SortedIssues from "../components/SortedIssues"

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allIssues: props.allIssues,
            //issues object from json comes to this function as props 
    }
    }

    componentDidUpdate() {
        if (!this.props.activeUser) {
            window.location.href = '#/login';
        }
    }
    sortedIssuesFunc=(sortType)=> {
//sortType is parameter from from Sortedissues.jsx 
        let sortedIssues;
        if(sortType==="priority"){  // check if parameter sortType equals string "priority"
            sortedIssues=this.state.allIssues.sort((a,b)=> b.priorityCode-a.priorityCode) 
        }  // sort by priorityCode (key from issues.json). have to sort by numbers (priorityCode is a number). could not sort by alphabet
        
        this.setState({allIssues:sortedIssues})
        // change the state. return a mutation of the object array as a sorted one. no need to return the allIssues object to parent (App.js) and save it to json (or other data base), because it is only for temporary rendering.
        console.log("from dashboard, type is", sortType);
        console.log(this.props.allIssues);
        console.log(this.state.allIssues);
    }

    render() {
        // check if activeUser exists. if not redirect to login
        /*if(this.props.activeUser == null){ 
            //if not move to login page
            window.location.href = '/#/login';
            return <div></div>;
        }*/
        let template = '';
        // check if activeUser is a committee memeber. if true render CommitteeDashboard component, else render TenantDashboard component
        if (this.props.activeUser && this.props.activeUser.isCommitteeMember) {

            template = <CommitteeDashboard
                allIssues={this.state.allIssues}
                addIssue={this.props.addIssue}
                removeIssue={this.props.removeIssue}
                activeUser={this.props.activeUser}
                allMessages={this.props.allMessages}
            ></CommitteeDashboard>
        }
        else if (this.props.activeUser) {
            template = <TenantDashboard
                allIssues={this.state.allIssues}
                addIssue={this.props.addIssue}
                removeIssue={this.props.removeIssue}
                activeUser={this.props.activeUser}
                allMessages={this.props.allMessages}
                addMessage={this.props.addMessage}
            >
            </TenantDashboard>
        }
        return (
            <div>
                <SortedIssues sortedIssuesFunc={this.sortedIssuesFunc} />
                {template}
            </div>
        )
    }
}


export default Dashboard;