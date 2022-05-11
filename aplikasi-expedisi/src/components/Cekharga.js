import React from 'react';
import Sidebar from '../common_components/Sidebar';
import Header from '../common_components/Header';
import '../App.css';


class Cekharga extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
            dataList: null
        }

    }





    componentDidMount() {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/v1/getkota", requestOptions)
            .then(response => response.text())
            .then(result => this.setState({
                dataList: result
            }))
            .catch(error => console.log('error', error));



    }

    render() {
        let dataList = JSON.parse(this.state.dataList);

        // let listdata = [];

        // if (dataList && dataList.length > 0) {
        //     dataList.map((listValue, index) => {
        //         listdata.push(

        //             <option key={index} >Option 1</option>

        //         );
        //     });
        // }

        // console.log('listt >> ' + dataList);

        // if (data != null) {
        //     console.log('loh kol ? ' + data.data.items[0].kode_pemda);
        // }
        // let aa = JSON.stringify(data)


        const btnMargin = {
            marginLeft: "1%",
        };

        const tabel = {
            minWidth: "845px"
        }


        return (
            <div className="App" >
                <Header />
                <Sidebar />
                <div className="content-body">
                    <div className="container-fluid">
                        <div className="form-head d-flex mb-3 align-items-start">
                            <div className="mr-auto d-none d-lg-block">
                                <h2 className="text-black font-w600 mb-0">Cek Harga Pengiriman Barang</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Informasi</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="basic-form">
                                            <form className="form">

                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label>Kota Asal</label>
                                                        <div className="form-group">
                                                            <select className="form-control form-control-lg">

                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label>Kota Tujuan</label>
                                                        <div className="form-group">
                                                            <select className="form-control form-control-lg">
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                                <option>Option 3</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="form-row">
                                                    <button type="submit" className="btn btn-primary">Simpan</button>
                                                </div>



                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div>
        );
    }
}

export default Cekharga;