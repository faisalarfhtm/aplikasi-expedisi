import React from 'react';
import '../App.css';


class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
            dataList: null
        }

        this.tambahdata = this.tambahdata.bind(this);

    }

    deletedata(param) {
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };

        console.log("PARAM > " + Object.values(param))

        fetch("http://localhost:8080/api/v1/databarang/" + param, requestOptions)
            .then(response => response.text())
            .then(result => window.location.href = '/')
            .catch(error => console.log('error', error));
    }

    editdata(param) {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/v1/listdatabarang/" + param, requestOptions)
            .then(response => response.text())
            .then(result => this.setState({
                data: result
            }))
            .catch(error => console.log('error', error));
    }

    tambahdata = (e) => {
        e.preventDefault();
        var namaBarang = document.getElementById('namaBarang').value;
        var jumlah = document.getElementById('jumlah').value;
        var tanggalPencatatan = document.getElementById('tanggalPencatatan').value;

        var raw = JSON.stringify({
            "jumlah": jumlah,
            "namaBarang": namaBarang,
            "tanggalPencatatan": tanggalPencatatan
        });

        // console.log("DATA PREP > " + raw);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/v1/simpandatabarang", requestOptions)
            .then(response => response.text())
            .then(result => window.location.href = '/')
            .catch(error => console.log('error', error));
    }

    componentDidMount() {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/v1/listdatabarang", requestOptions)
            .then(response => response.text())
            .then(result => this.setState({
                dataList: result
            }))
            .catch(error => console.log('error', error));



    }

    render() {
        let dataList = JSON.parse(this.state.dataList);

        let data = JSON.parse(this.state.data);
        console.log("CIBAA > " + data)

        let listdata = [];

        if (dataList && dataList.length > 0) {
            dataList.map((listValue, index) => {
                listdata.push(

                    <tr key={index}>
                        <td>{listValue.namaBarang}</td>
                        <td>{listValue.jumlah}</td>
                        <td>{listValue.tanggalPencatatan}</td>
                        <td>

                            <div className="d-flex">
                                <a onClick={() => this.editdata(listValue.id)} className="btn btn-primary shadow btn-xs sharp mr-1"><i className="fa fa-pencil"></i></a>
                                <a onClick={() => this.deletedata(listValue.id)} className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash"></i></a>
                            </div>
                        </td>
                    </tr>

                );
            });
        }

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
            <div className="content-body">
                <div className="container-fluid">
                    <div className="form-head d-flex mb-3 align-items-start">
                        <div className="mr-auto d-none d-lg-block">
                            <h2 className="text-black font-w600 mb-0">Aplikasi Expedisi</h2>
                            <p className="mb-0">Selamat Datang!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Informasi Barang</h4>
                                </div>
                                <div className="card-body">
                                    <div className="basic-form">
                                        <form className="form" onSubmit={this.tambahdata.bind(this)}>

                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <input type="text" className="form-control" hidden name="id" id="id" value={data && data.id} />
                                                    <label>Nama Barang</label>
                                                    <input type="text" className="form-control" placeholder="Nama Barang" name="namaBarang" id="namaBarang" value={data && data.namaBarang} />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Jumlah</label>
                                                    <input type="text" className="form-control" placeholder="Jumlah Barang" name="jumlah" id="jumlah" value={data && data.jumlah} />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Tanggal Pencatatan</label>
                                                    <input type="text" className="form-control" placeholder="Tanggal Pencatatan" name="tanggalPencatatan" id="tanggalPencatatan" value={data && data.tanggalPencatatan} />
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
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">List Barang</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table id="example3" className="display" style={tabel} >
                                    <thead>
                                        <tr>
                                            <th>Nama Barang</th>
                                            <th>Jumlah</th>
                                            <th>Tanggal Catat</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listdata}
                                    </tbody >
                                </table >
                            </div >
                        </div >
                    </div >
                </div >
            </div >
        );
    }
}

export default Dashboard;