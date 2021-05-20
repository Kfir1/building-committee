import React from 'react';
import { Accordion } from 'react-bootstrap';


// this component is for viewing all messages list
class MessagesList extends React.Component{
    constructor(props){
    super(props)

    
} 

render(){

    return(
        <div>
        <Accordion defaultActiveKey="0">
             {this.props.allMessages} 
        </Accordion>
    </div>
    )
}


}

export default MessagesList
