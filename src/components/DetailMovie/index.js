import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actDetailMovieApi } from "./modules/action";
import "./style.scss";

export class DetailMoviePage extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchDetailMovie(id);
    }

    render() {
        const { data } = this.props;
        return (
            <div className="container">
                <div className="title_detailMovie">
                    <h1>Chi Tiết Phim</h1>
                </div>
                <div className="row">
                    <div className="col-2 img_detailMovie">
                        <img className="img-fluid" src={data && data.hinhAnh} alt="" />
                    </div>
                    <div className="col-10">
                        <div className="sub-title_detailMovie">
                            <h2 className="" >{data && data.tenPhim}</h2>
                        </div>
                        <div className="info_detailMovie">
                            <div className="info_detailMovie-ngayKhoiChieu">
                                <p className="font-weight-bold d-inline">Ngày khởi chiếu: </p>
                                <span>{data && data.ngayKhoiChieu}</span>
                            </div>
                            <div className="info_detailMovie-moTa">
                                <p className="font-weight-bold d-inline">Nội dung: </p>
                                <span>{data && data.moTa}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row detailMovie_tab">
                    <div className="col-12">
                        <ul className="nav nav-tabs container" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="lichchieu-tab" data-toggle="tab" href="#lichchieu" role="tab" aria-controls="lichchieu" aria-selected="true">Lịch chiếu</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="trailer-tab" data-toggle="tab" href="#trailer" role="tab" aria-controls="trailer" aria-selected="false">Trailer</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="lichchieu" role="tabpanel" aria-labelledby="lichchieu-tab">Lịch chiếu</div>
                            <div className="tab-pane fade" id="trailer" role="tabpanel" aria-labelledby="trailer-tab">
                            <iframe width="80%" height="500"
                                    src={data && data.trailer}>
                                </iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.detailMovieReducer.loading,
        data: state.detailMovieReducer.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetailMovie: (id) => {
            dispatch(actDetailMovieApi(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage
)