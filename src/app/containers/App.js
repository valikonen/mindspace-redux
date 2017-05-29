import React from "react";

import { connect } from 'react-redux';

import { setName } from '../actions/user-actions';

import { User } from '../components/User';
import { Main } from '../components/Main';

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
            dispatch(setName(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);