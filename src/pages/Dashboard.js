import  React from 'react';
import CommitteeDashboard from '../components/CommitteeDashboard';
import TenantDashboard from '../components/TenantDashboard';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
    
    }

    componentDidUpdate() {
        if(!this.props.activeUser) {
            window.location.href = '#/login';
        }
    }

    render(){
            // check if activeUser exists. if not redirect to login
        /*if(this.props.activeUser == null){ 
            //if not move to login page
            window.location.href = '/#/login';
            return <div></div>;
        }*/
        let template = '';
            // check if activeUser is a committee memeber. if true render CommitteeDashboard component, else render TenantDashboard component
        if(this.props.activeUser && this.props.activeUser.isCommitteeMember){
            
            template = <CommitteeDashboard
            allIssues = {this.props.allIssues}
            ></CommitteeDashboard>
        }
        else if(this.props.activeUser) {
            template = <TenantDashboard
            allIssues = {this.props.allIssues}
            addIssue={this.props.addIssue}
            removeIssue={this.props.removeIssue}
            activeUser={this.props.activeUser}
            >
            </TenantDashboard>
        }
        return(
            <div>
               {template}
            </div>
        )
    }
}


export default Dashboard;