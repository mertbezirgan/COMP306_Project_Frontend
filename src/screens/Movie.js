import React, { Component } from "react";
import { getMovieById } from "../backend/getMovie";
import Spinner from "react-bootstrap/Spinner";
import ListGroup from "react-bootstrap/ListGroup";

export default class Movie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			isLoading: true,
		};
	}

	async componentDidMount() {
		let data = await getMovieById(this.props.movieId);
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
									<div className="movie-data-container m-c">
										<h2>Movie</h2>
										<h3>
											Title:{" "}
											<b>
												{this.state.data.movieData.name}
											</b>
										</h3>
										<h4>
											Year:{" "}
											<b>
												{this.state.data.movieData.year}
											</b>
										</h4>
										<h4>
											Rank:{" "}
											<b>
												{this.state.data.movieData.rank
													? `${this.state.data.movieData.rank}/10`
													: "NA"}
											</b>
										</h4>
										{this.state.data.movieData.genres ? (
											<h4>
												Genres:
												<ListGroup
													style={{
														paddingTop: "10px",
														fontSize: "18px",
													}}
												>
													{this.state.data.movieData.genres
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
									</div>
									<div className="director-data-container m-c">
										<h2>Director</h2>
										{this.state.data.movieData.did ? (
											<>
												<h3>
													Name:{" "}
													<b>
														{`${this.state.data.movieData.dfn} ${this.state.data.movieData.dln}`}
													</b>
												</h3>
												<div className="link-container">
													<a
														href={`/director/${this.state.data.movieData.did}`}
													>
														See other films from
														director
													</a>
												</div>
											</>
										) : (
											<h5 className="no-data">
												No director data was found
											</h5>
										)}
									</div>
									<div className="actor-data-container m-c">
										<h2>Actors</h2>
										{this.state.data.actorsData &&
										this.state.data.actorsData.length >
											0 ? (
											<>
												<ListGroup
													variant="flush"
													style={{
														paddingTop: "10px",
													}}
													className="actors-list"
												>
													{this.state.data.actorsData.map(
														(g) => {
															return (
																<ListGroup.Item
																	key={
																		g.actor_id
																	}
																>
																	<h4>{`${g.afn} ${g.aln}`}</h4>
																	<span>{`(${g.role})`}</span>
																	<div className="link-container">
																		<a
																			href={`/actor/${g.actor_id}`}
																		>
																			Go
																			to
																			actor
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
												No actor data was found
											</h5>
										)}
									</div>
								</>
							) : (
								<div className="error-container">
									<h2>
										No movie was found with the given id
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
