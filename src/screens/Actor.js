import React, { Component } from "react";
import { getActorById } from "../backend/getActor";
import Spinner from "react-bootstrap/Spinner";
import ListGroup from "react-bootstrap/ListGroup";

export default class Actor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			isLoading: true,
		};
	}

	async componentDidMount() {
		let data = await getActorById(this.props.actorId);
		console.log(data.data);
		this.setState({
			data: data.success ? data.data : null,
			isLoading: false,
		});
	}

	render() {
		return (
			<React.Fragment>
				<div id="screen">
					{this.state.isLoading ? (
						<div className="spinner-c">
							<Spinner animation="border" />
						</div>
					) : (
						<div>
							{this.state.data ? (
								<>
									<div className="actor-data-container m-c">
										<h2>Actor</h2>
										{this.state.data.actorData.id ? (
											<>
												<h3>
													Name:{" "}
													<b>
														{`${this.state.data.actorData.first_name} ${this.state.data.actorData.last_name}`}
													</b>
												</h3>
												<h4>
													Gender:{" "}
													<b>
														{
															this.state.data
																.actorData.gender
														}
													</b>
												</h4>
											</>
										) : (
											<h5 className="no-data">
												No actor data was found
											</h5>
										)}
									</div>
									<div className="movie-data-container m-c">
										<h2>Movies</h2>
										{this.state.data.movieData &&
										this.state.data.movieData.length > 0 ? (
											<>
												<ListGroup
													variant="flush"
													style={{
														paddingTop: "10px",
													}}
													className="actors-list"
												>
													{this.state.data.movieData.map(
														(g) => {
															return (
																<ListGroup.Item
																	key={g.movie_id}
																>
																	<h3>
																		Title:{" "}
																		<b>
																			{
																				g.name
																			}
																		</b>
																	</h3>
																	<h4>
																		Year:{" "}
																		<b>
																			{
																				g.year
																			}
																		</b>
																	</h4>
																	<h4>
																		Rank:{" "}
																		<b>
																			{g.rank
																				? `${g.rank}/10`
																				: "NA"}
																		</b>
																	</h4>
                                                                    <br/>
                                                                    <h4>
																		Played Role:{" "}
																		<b>
																			{g.role}
																		</b>
																	</h4>
																	<div className="link-container">
																		<a
																			href={`/movie/${g.movie_id}`}
																		>
																			Go
																			to
																			movie
																		</a>
																	</div>
																</ListGroup.Item>
															);
														}
													)}
												</ListGroup>
											</>
										) : (
											<h5 className="no-data">
												No movie data was found
											</h5>
										)}
									</div>
								</>
							) : (
								<div className="error-container">
									<h2>
										No actor was found with the given id
									</h2>
								</div>
							)}
						</div>
					)}
				</div>
			</React.Fragment>
		);
	}
}
