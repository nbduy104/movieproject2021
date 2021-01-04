import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { actListMovieApi, actionName } from "./modules/action";

import { LIST_MOVIE_SUCCESS } from "./modules/constants";
import { LIST_MOVIE_CHANGE_PAGE } from "./modules/constants";

class CommingSoon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chiSoNow: 0,
    };
  }

  componentDidMount() {
    this.props.fetchListMovie("GP10", 1, LIST_MOVIE_SUCCESS);
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
        LIST_MOVIE_SUCCESS
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
  fetchListMovie: (group, page, sucess) => {
    dispatch(actListMovieApi(group, page, sucess));
  },
  fetchChangePage: (flag) => {
    dispatch(actionName(LIST_MOVIE_CHANGE_PAGE, flag));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CommingSoon);
