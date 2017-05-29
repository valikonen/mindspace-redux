import React from "react";

import { connect } from 'react-redux';

import { User } from './User';
import { Main } from './Main';

class App extends React.Component {


    render() {
        console.log(this.props);
        return (
            <div className="container">
                <Main changeUsername={ () => this.props.setName("Zoroastru")}/>
                <User username={this.props.user.name} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.reducerUser,
        number: state.reducerNumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);