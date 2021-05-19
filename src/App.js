
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


class App extends React.Component{
      constructor(props) {
        super(props);
        this.state = {
          allUsers: jsonData,
          activeUser: null, 
          allIssues: issuesData,
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


      // newIssue is new object, index is the place
      addIssue = (newIssue, index) => {
        if ( typeof index === "undefined" ){
          index = -1;
        }
  
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
          this.setState({
            allIssues: this.state.allIssues.concat(newIssue)
          });  
        }
      }

      // addCommitteeMemberComment = (comment, indexOfComment) =>{
      //     if (typeof indexOfComment === "undefined") {
      //           index = -1;
      //     }
      //     if(index > -1)
      //     this.setState({
      //         allIssues: this.state.a
      //     })
      // } 

      removeIssue = (index) =>  {
        this.setState({
          // index from  removeIssue in  tenantDashbord.js .  will filter the issue we want to remove by index received. filter( (v, i)  -v- is for first parameter and i for index. have to write first param for second param to be the index of filter array
          allIssues: this.state.allIssues.filter( (v, i) => { return i !== index; })
        });
      }
      render(){
            return (
              <HashRouter>
                      <Route exact path={['/', '/login', '/Signup','/dashboard']}>
                          <VaadNavbar
                          activeUser={this.state.activeUser}
                          logout={this.logout}
                          ></VaadNavbar>
                      </Route>
                      <Container>
                         <Route exact path="/">
                          <HomePage>

                          </HomePage>
                        </Route>
                        <Route exact path="/Signup">
                          <Signup
                            allUsers={this.state.allUsers}
                            addUser={this.addUser}
                          ></Signup>
                        </Route>
                        {/* <Route exact path="/message">
                          <MessagePage>

                          </MessagePage>
                        </Route> */}
                           <Route exact path="/dashboard">
                          <Dashboard 
                          activeUser={this.state.activeUser}
                          allIssues={this.state.allIssues}
                          // addIssue={(issue) => { this.addIssue(issue); }}
                          addIssue={this.addIssue}
                          removeIssue={this.removeIssue}
                          >
                          </Dashboard>
                        </Route>
                        <Route exact path="/login">
                            <Login
                            login={this.login}
                            allUsers={this.state.allUsers}
                            ></Login>
                        </Route>
                      </Container>
               </HashRouter>
                   );
      }
}     

export default App;
