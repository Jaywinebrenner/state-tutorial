import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }


  // THIS IS GOING TO BE CALLED ON NEWTICKETFORM
  testy() {
    console.log('it worked!');
  }

  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />

          // THIS IS WHERE WE PASS TESTY() DOWN A LEVEL AS A PROP TO NEW TICKET CONTROL
          <Route path='/newticket' render={()=>
            <NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList}
            testy={this.testy} />} />

          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
