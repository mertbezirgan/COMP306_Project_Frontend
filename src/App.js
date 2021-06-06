import React from "react";
import { Route, Switch } from "react-router-dom";

//Screens and Components
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./screens/Home";
import Movie from "./screens/Movie";
import Director from "./screens/Director";
import Actor from "./screens/Actor";

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<NavigationBar />
				<Switch>
					<Route
						exact
						path="/"
						component={() => {
							return <Home />;
						}}
					/>
					<Route
						exact
						path="/movie/:id"
						component={(p) => {
							return <Movie movieId={p.match.params.id} />;
						}}
					/>
                    <Route
						exact
						path="/director/:id"
						component={(p) => {
							return <Director directorId={p.match.params.id} />;
						}}
					/>
                    <Route
						exact
						path="/actor/:id"
						component={(p) => {
							return <Actor actorId={p.match.params.id} />;
						}}
					/>
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;
