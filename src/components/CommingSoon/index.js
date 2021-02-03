import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { actListMovieApi, actionName } from "./modules/action";
import * as ActionType from "./modules/constants";
class CommingSoon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chiSoNow: 0,
    };
  }

  componentDidMount() {
    this.props.fetchListMovie(
      "GP10",
      1,
      ActionType.LIST_MOVIE_REQUEST,
      ActionType.LIST_MOVIE_SUCCESS,
      ActionType.LIST_MOVIE_FAILED
    );
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { dataNow } = nextProps;
    const { chiSoNow } = this.state;
    if (
      dataNow &&
      dataNow[chiSoNow].currentPage !== dataNow[chiSoNow].totalPages
    ) {
      this.props.fetchListMovie(
        "GP10",
        dataNow[chiSoNow].currentPage + 1,
        ActionType.LIST_MOVIE_REQUEST,
        ActionType.LIST_MOVIE_SUCCESS,
        ActionType.LIST_MOVIE_FAILED
      );
      this.setState({
        chiSoNow: chiSoNow + 1,
      });
    }
  }

  render() {
    return <></>;
  }
}
const mapStateToProps = (state) => ({
  dataNow: state.listMovieReducer.dataNow,
});
const mapDispatchToProps = (dispatch) => ({
  fetchListMovie: (group, page, request, success, failed) => {
    dispatch(actListMovieApi(group, page, request, success, failed));
  },
  fetchChangePage: (flag) => {
    dispatch(actionName(ActionType.LIST_MOVIE_CHANGE_PAGE, flag));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CommingSoon);
