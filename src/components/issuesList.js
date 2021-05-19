import React from 'react';
import { Accordion } from 'react-bootstrap';

class IssuesList extends React.Component{
    constructor(props){
    super(props)

    
} 





render(){

    return(
        <div>
        <Accordion defaultActiveKey="0">
             {this.props.allIssues} 
        </Accordion>
    </div>
    )
}


}

export default IssuesList


  