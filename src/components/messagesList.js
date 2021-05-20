import React from 'react';
import { Accordion } from 'react-bootstrap';


// this component is for viewing all messages list
class Allmessages extends React.Component{
    constructor(props){
    super(props)

    
} 





render(){

    return(
        <div>
        <Accordion defaultActiveKey="0">
             {this.props.allmessages} 
        </Accordion>
    </div>
    )
}


}

export default Allmessages
