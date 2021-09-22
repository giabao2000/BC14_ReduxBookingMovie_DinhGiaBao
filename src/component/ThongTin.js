import React, { Component } from "react";
import { connect } from "react-redux";
import { handleDeleteChairAction } from "../redux/actions";

class ThongTin extends Component {
    calculateTotal = () => {
        return this.props.listChairSelected.reduce(
            (accumulator, currentValue) => {
                return (accumulator += currentValue.gia);
            },
            0
        );
    };

    renderInfoChair = () => {
        return this.props.listChairSelected.map((ghe, index) => {
            return (
                <tr key={index} className="text-warning">
                    <td>{ghe.soGhe}</td>
                    <td>{ghe.gia}</td>
                    <td className="text-center">
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => {
                                this.props.handleDeleteChair(ghe.soGhe);
                            }}
                        >
                            Hủy
                        </button>
                    </td>
                </tr>
            );
        });
    };

    render() {
        return (
            <div>
                {/* Ghe duoc chon */}
                <button
                    className="gheDuocChon"
                    style={{ margin: "0 12px 0 0" }}
                ></button>
                <span className="text-light" style={{ fontSize: "30px" }}>
                    Ghế đã chọn
                </span>
                <br />

                {/* Ghe dang chon */}
                <button
                    className="gheDangChon"
                    style={{ margin: "0 12px 0 0" }}
                ></button>
                <span className="text-light" style={{ fontSize: "30px" }}>
                    Ghế đang chọn
                </span>
                <br />

                {/* Ghe chua chon */}
                <button
                    className="ghe"
                    style={{ margin: "0 12px 0 0" }}
                ></button>
                <span className="text-light" style={{ fontSize: "30px" }}>
                    Ghế chưa đặt
                </span>

                <div style={{ position: "relative" }}>
                    <div id="table-scroll">
                        <table
                            border="2"
                            className="table text-light mt-2"
                            style={{
                                fontSize: "30px",
                            }}
                        >
                            <thead>
                                <tr className="text-warning">
                                    <th>Số ghế</th>
                                    <th>Giá</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>{this.renderInfoChair()}</tbody>

                            <tfoot className="text-warning">
                                <td>Tổng tiền:</td>
                                <td>{this.calculateTotal()}</td>
                                <td></td>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listChairSelected: state.listChairReducer.listChairSelected,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleDeleteChair: (soGhe) => {
            dispatch(handleDeleteChairAction(soGhe));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThongTin);
