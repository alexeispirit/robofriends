import React from 'react';
import { connect } from 'react-redux';

import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';  
import Scroll from '../components/Scroll';
import Header from '../components/Header';
// import ErrorBoundry from '../components/CardList';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

class App extends React.Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        if (isPending) {
            return <h1 className='tc'>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <Header />
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        {/* <ErrorBoundry> */}
                            <CardList robots={filteredRobots}/>
                        {/* </ErrorBoundry> */}
                    </Scroll>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);