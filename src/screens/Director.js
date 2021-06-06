import React, { Component } from "react";
import { getDirectorById } from "../backend/getDirector";
import Spinner from "react-bootstrap/Spinner";
import ListGroup from "react-bootstrap/ListGroup";


export default class Director extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			isLoading: true,
		};
	}

	async componentDidMount() {
		let data = await getDirectorById(this.props.directorId);
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
									<div className="director-data-container m-c">
										<h2>Director</h2>
										{this.state.data.directorData.id ? (
											<>
												<h3>
													Name:{" "}
													<b>
														{`${this.state.data.directorData.first_name} ${this.state.data.directorData.last_name}`}
													</b>
												</h3>
												{this.state.data.directorData
													.genres ? (
													<h4>
														Genres:
														<ListGroup
															style={{
																paddingTop:
																	"10px",
																fontSize:
																	"18px",
															}}
														>
															{this.state.data.directorData.genres
																.split(", ")
																.map((g) => (
																	<ListGroup.Item
																		key={g}
																	>
																		{g}
																	</ListGroup.Item>
																))}
														</ListGroup>
													</h4>
												) : null}
											</>
										) : (
											<h5 className="no-data">
												No director data was found
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
																	key={g.id}
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
																				? `${this.state.data.movieData.rank}/10`
																				: "NA"}
																		</b>
																	</h4>
																	<div className="link-container">
																		<a
																			href={`/movie/${g.id}`}
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
										No director was found with the given id
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
