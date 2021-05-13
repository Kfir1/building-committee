import  React from 'react';
import CommitteeDashboard from '../components/CommitteeDashboard';
import TenantDashboard from '../components/TenantDashboard';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
    
    }

    render(){
            // check if activeUser exists. if not redirect to login
        if(this.props.activeUser == null){ 
            
            window.location.href = '/#/login';
        }
        let template = '';
            // check if activeUser is a committee memeber. if true render CommitteeDashboard component, else render TenantDashboard component
        if(this.props.activeUser.isCommitteeMember){

            template = <CommitteeDashboard></CommitteeDashboard>
        }
        else{
            template = <TenantDashboard></TenantDashboard>
        }
        return(
            <div>
               {template}
            </div>
        )
    }
}


export default Dashboard;