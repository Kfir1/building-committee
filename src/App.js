
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import VaadNavbar from "./components/VaadNavbar"
import { Container } from 'react-bootstrap';
import Dashboard from './pages/Dashboard';
import jsonData from './data/users.json';
import issuesData from './data/issues.json';
import messagesData from './data/messages.json';
import moment from 'moment';
import TenantAccount from './pages/TenantAccount';

class App extends React.Component{
      constructor(props) {
        super(props);
        this.state = {
          allUsers: jsonData,
          // activeUser: null, 
          allIssues: issuesData.map( (issue) => {
            return { 
              ...issue, // put all key values from the original object
              timeStamp: moment(issue.timeStamp),  // change only the the timeStamp key value using moment method  moment(issue.timeStamp)  convert  issue.timeStamp to momnet object
            }
          } ),
          allMessages: messagesData,
          activeUser:{
            "isCommitteeMember": false,
            "id":2,
            "name": "Sara Doe (Tenant)",
            "email": "sara@gmail.com",
            "password": "abc",
            "address": "even gvirol 23",
            "city": "tel aviv",
            "apartment": "13"
          }
        }
      }

      // componentDidMount() {
      // fetch('/data/users.json')
      // .then(responseData => responseData.json())
      // .then(data => {
      //     this.setState({
      //       allUsers: data
      //     }

      //     )
        
      // })
      // .catch( (error) =>  {alert('the AJAX call failed')
      //     console.log(error)
      // }
      // )
        
      // }
      
      

      addUser = (newUser) =>{
   
        this.setState({
          activeUser: newUser,
          allUsers: this.state.allUsers.concat(newUser),
            
        })
      }
  
      
      login = (userObj) => {
        this.setState({
          activeUser: userObj
        });
      }
      logout = () => {
        this.setState({
          activeUser: null,
        })
      }
      //issueIndex is the index of the issue inside the state of issues
      //addComment is the description of the comment from the textbox (html)
      //commentIndex is a non-mandatory parameter. index of the comment if we are in edit mode.
      // pass the addComment function down the props, all the way into CommiteeDashboard and TenantDashboard. 
      addComment = (issueIndex, addComment, commentIndex) => {
        //issueIndex  is for knowing which issue object to update. addcomment is an object with the comment and the user id, commentIndex is a non-mandatory parameter. index of the comment if we are in edit mode. 
        if ( typeof issueIndex === "undefined" ){
        //  throw Error("issueIndex is mandatory");
        }
        if(typeof commentIndex === "undefined") {
          commentIndex = -1;
        }
        if(issueIndex > -1) {
          console.log("commentIndex", commentIndex);
          this.setState({
            allIssues: this.state.allIssues.map((issue,rowIndex) =>{
              if (rowIndex === issueIndex) {
                if(commentIndex >  -1) {
                  //edit comment by commentIndex. edit the comment with the one from the parameter addComment. 
                  issue.comments[commentIndex].comment = addComment.comment;
                } else {
                  // add new comment to json
                  issue.comments = issue.comments.concat(addComment);
                }
                return issue;
              } 
              else {
                return issue;
              } 
            })
          });
        }
      }

      getUserTitleByUserId  = (id) => {
        // findIndex finds the user object's index that has a property id with the value of the id parameter.
        const indexOfUserInUsersArray = jsonData.findIndex(( (user) => user.id === id));
        // returns the object name by index perior found userobject.
        return jsonData[indexOfUserInUsersArray].name;
      }
        
        //TODO: write the logic of the function. base it on addIssue.
      
      

      // newIssue is new object, index is the place
      addIssue = (newIssue, index) => {
        if ( typeof index === "undefined" ){
          index = -1;
        }
        console.log("addIssue", index);
        if(index > -1) {
          this.setState({
            allIssues: this.state.allIssues.map((issue, rowIndex) => {
              if (rowIndex === index) {
                return newIssue;
              } 
              else {
                return issue;
              } 
            })
          });
        } else {
          console.log(this.state.allIssues, newIssue);
          this.setState({
            allIssues: this.state.allIssues.concat(newIssue)
          });  
        }
      }
      removeIssue = (index) =>  {
        this.setState({
          // index from  removeIssue in  tenantDashbord.js .  will filter the issue we want to remove by index received. filter( (v, i)  -v- is for first parameter and i for index. have to write first param for second param to be the index of filter array
          allIssues: this.state.allIssues.filter( (v, i) => { return i !== index; })
        });
      }

      addMessage = (newMessage, index) => {
        if ( typeof index === "undefined" ){
          index = -1;
        }
        if(index > -1) {
          this.setState({
            allMessages: this.state.allMessages.map((message, rowIndex) => {
              if (rowIndex === index) {
                return newMessage;
              } 
              else {
                return message;
              } 
            })
          });
        } else {
          this.setState({
            allMessages: this.state.allMessages.concat(newMessage)
          });  
        }
      }
      removeMessage = (index) => {
        this.setState({
          // index from  removeIssue in  tenantDashbord.js .  will filter the issue we want to remove by index received. filter( (v, i)  -v- is for first parameter and i for index. have to write first param for second param to be the index of filter array
          allMessages: this.state.allMessages.filter( (v, i) => { return i !== index; })
        });
      }
      addCommitteeMemberComment = (comment, indexOfComment) =>{
          if (typeof indexOfComment === "undefined") {
            indexOfComment = -1;
          }
          if(indexOfComment > -1)
          this.setState({
              allIssues: this.state.allIssues.concat(comment)
          })
      } 

      // sortedIssuesAdd = (sorted) => {
      //   this.setState({allIssues: this.state.allIssues.concat(allIssues)
      //   })

      // }
      // sortIssue = (sortedIssuesArrObj) =>{
      
      // }

      render(){
            return (
              <HashRouter>
                      <Route exact path={['#/', '#/login', '#/Signup','#/dashboard','#/tenantAccount']}>
                          <VaadNavbar
                          activeUser={this.state.activeUser}
                          logout={this.logout}
                          ></VaadNavbar>
                      </Route>
                      <Container>
                         <Route exact path="#/">
                          <HomePage>

                          </HomePage>
                        </Route>
                        <Route exact path="#/Signup">
                          <Signup
                            allUsers={this.state.allUsers}
                            addUser={this.addUser}
                          ></Signup>
                        </Route>
                        {/* <Route exact path="/message">
                          <MessagePage>

                          </MessagePage>
                        </Route> */}
                           <Route exact path="#/dashboard">

                          <Dashboard 
                          activeUser={this.state.activeUser}
                          allIssues={this.state.allIssues}
                          // addIssue={(issue) => { this.addIssue(issue); }}
                          addIssue={this.addIssue}
                          removeIssue={this.removeIssue}
                          allMessages={this.state.allMessages} 
                          addMessage={this.addMessage}
                          removeMessage={this.removeMessage}
                          addComment={this.addComment}
                          getUserTitleByUserId={this.getUserTitleByUserId}
                          >
                          </Dashboard>
                        </Route>
                        <Route exact path="#/login">
                            <Login
                            login={this.login}
                            allUsers={this.state.allUsers}
                            sortedIssuesAdd={this.sortedIssuesAdd}
                            ></Login>
                        </Route>
                        <Route exact path="#/tenantAccount">
                            <TenantAccount
                            allUsers={this.state.allUsers}
                            addUser={this.addUser}
                            ></TenantAccount>
                        </Route>
                      </Container>
               </HashRouter>
                   );
      }
}     

export default App;
