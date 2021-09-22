import React, { Component } from "react";
import "../css/BaiTapBookingTicket.css";
import HangGhe from "./HangGhe";
import ThongTin from "./ThongTin";
import data from "../Data/danhSachGhe.json";

export default class BookingMovie extends Component {
    renderHangGhe = () => {
        return data.map((hangGhe, index) => {
            return <HangGhe key={index} hangGhe={hangGhe} soHangGhe={index} />;
        });
    };
    render() {
        return (
            <div
                style={{
                    position: "fixed",
                    height: "100%",
                    width: "100%",
                    backgroundImage: "url('../../img/bgmovie.jpg')",
                    backgroundSize: "cover",
                }}
                className="bookingMovie"
            >
                <div
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        position: "fixed",
                        height: "100%",
                        width: "100%",
                    }}
                ></div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <div className="display-4 text-warning text-center mt-3">
                                Đặt Vé Xem Phim CYBERLEARN.VN
                            </div>

                            <div
                                className="text-light text-center mt-3"
                                style={{ fontSize: "25px" }}
                            >
                                Màn Hình
                            </div>

                            <div
                                className="screen"
                                style={{ margin: "0 auto" }}
                            ></div>

                            <div className="container">
                                {this.renderHangGhe()}
                            </div>
                        </div>

                        <div className="col-4">
                            <div
                                className="text-warning text-center"
                                style={{ fontSize: "50px", marginTop: "50px" }}
                            >
                                Danh Sách Ghế Bạn Chọn
                            </div>

                            <ThongTin />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
