import React, { Component } from "react";
import { LIST_MOVIE_COMMING_SUCCESS } from "./modules/constants";
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
    this.props.fetchListMovie("GP02", 1, LIST_MOVIE_COMMING_SUCCESS);
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
        LIST_MOVIE_COMMING_SUCCESS
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
  fetchListMovie: (group, page, success) => {
    dispatch(actListMovieApi(group, page, success));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCommingSoonPage2);
