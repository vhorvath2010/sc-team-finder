import React from "react";
import { CssBaseline } from "@material-ui/core";
import MenuBar from './components/MenuBar'
import SearchResultsPage from "./components/SearchResultsPage";
import { getAllUserData } from './components/firebase';

export default class Search extends React.Component {

    constructor() {
        super()
        this.state = {
            users: null,
        }
    }

    componentDidMount() {
        getAllUserData().then(data => {
            this.setState({ users: data });
        });
    }

    render() {
        return (
            <div className="FindTeammates">
                <CssBaseline />
                <MenuBar />
                <SearchResultsPage users={this.state.users} />
            </div>
        )
    }
}