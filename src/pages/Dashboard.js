import React from 'react';
import CommitteeDashboard from '../components/CommitteeDashboard';
import TenantDashboard from '../components/TenantDashboard';
import SortedIssues from "../components/SortedIssues"

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allIssues: props.allIssues,
            
    }
    }

    componentDidUpdate() {
        if (!this.props.activeUser) {
            window.location.href = '#/login';
        }
    }
    sortedIssuesFunc=(sortType)=> {

        let sortedIssues;
        if(sortType==="priority"){
            sortedIssues=this.state.allIssues.sort((a,b)=> b.priorityCode-a.priorityCode)
        }
        this.setState({allIssues:sortedIssues})

        console.log("from dashboard, type is", sortType);

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