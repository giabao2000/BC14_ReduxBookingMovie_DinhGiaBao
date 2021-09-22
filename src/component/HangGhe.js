import React, { Component } from "react";
import { connect } from "react-redux";
import { handleOnClickAction } from "../redux/actions";

class HangGhe extends Component {
    // Render ra danh sách ghế từ hàng thứ 2 trở đi
    // Danh sách ghế: A1 -> A12, ... , J1 -> J12
    // dùng class "ghe"
    renderRowChair = () => {
        const { danhSachGhe } = this.props.hangGhe;

        return danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = "";
            let disabled = false;

            // Xét trường hợp là ghế đó đã dc đặt rồi
            if (ghe.daDat) {
                cssGheDaDat = "gheDuocChon";
                disabled = true;
            }

            // xét trường hợp người dùng click chọn đặt ghế
            const indexChairSelected = this.props.listChairSelected.findIndex(
                (chair) => chair.soGhe === ghe.soGhe
            );

            let cssGheDangChon = "";

            if (indexChairSelected !== -1) {
                cssGheDangChon = "gheDangChon";
            }

            return (
                <button
                    key={index}
                    className={`ghe ${cssGheDaDat} ${cssGheDangChon}`}
                    disabled={disabled}
                    onClick={() => {
                        this.props.handleOnClick(ghe.soGhe, ghe.gia);
                    }}
                >
                    {ghe.soGhe}
                </button>
            );
        });
    };

    // Render ra danh sách ghế cho hàng đầu tiên
    // Danh sách ghế: 1 -> 12
    // dùng class "rowNumber"
    renderFirstRowChair = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return (
                <button className="rowNumber" key={index}>
                    {hang.soGhe}
                </button>
            );
        });
    };

    // Render ra số hàng và danh sách ghế trong hàng đó
    // Số hàng: "" -> A -> J
    // Danh sách ghế: 1 -> 12, A1 -> A12, ... , J1 -> J12
    renderAllChair = () => {
        const { hangGhe, soHangGhe } = this.props;

        //soHangGhe là hàng đầu tiên thì dùng class "rowNumber" để render soGhe
        if (soHangGhe === 0) {
            return (
                <div className="ml-4">
                    {hangGhe.hang} {this.renderFirstRowChair()}
                </div>
            );
        }
        // Ngược lại dùng class "ghe" để render soGhe
        else {
            return (
                <div>
                    {hangGhe.hang} {this.renderRowChair()}
                </div>
            );
        }
    };

    render() {
        return (
            <div
                className="text-light text-center"
                style={{ fontSize: "35px" }}
            >
                {this.renderAllChair()}
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
        handleOnClick: (soGhe, gia) => {
            dispatch(handleOnClickAction(soGhe, gia));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
