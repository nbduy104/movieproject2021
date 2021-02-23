import React, { Component } from "react";
import * as ActionType from "./modules/constants";
import "./style.scss";
import { actListMovieApi } from "./modules/action";
import { connect } from "react-redux";
class MovieCommingSoonPage2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chiSo: 0,
    };
  }
  componentDidMount() {
    this.props.fetchListMovie(
      "GP02",
      1,
      ActionType.LIST_MOVIE_COMMING_REQUEST,
      ActionType.LIST_MOVIE_COMMING_SUCCESS,
      ActionType.LIST_MOVIE_COMMING_FAILED
    );
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { dataComming } = nextProps;
    const { chiSo } = this.state;
    if (
      dataComming &&
      dataComming[chiSo].currentPage !== dataComming[chiSo].totalPages
    ) {
      this.props.fetchListMovie(
        "GP02",
        dataComming[chiSo].currentPage + 1,
        ActionType.LIST_MOVIE_COMMING_REQUEST,
        ActionType.LIST_MOVIE_COMMING_SUCCESS,
        ActionType.LIST_MOVIE_COMMING_FAILED
      );
      this.setState({
        chiSo: chiSo + 1,
      });
    }
  }

  render() {
    return <></>;
  }
}
const mapStateToProps = (state) => ({
  dataComming: state.listMovieReducer.dataComming,
});
const mapDispatchToProps = (dispatch) => ({
  fetchListMovie: (group, page, request, success, failed) => {
    dispatch(actListMovieApi(group, page, request, success, failed));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCommingSoonPage2);
