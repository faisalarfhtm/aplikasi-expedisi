import React from 'react';
import '../App.css';

class Sidebar extends React.Component {
    componentDidMount() {
        //An array of assets
        let scripts = [
            { src: "assets/js/custom.min.js" },
        ]
        //Append the script element on each iteration
        scripts.forEach(item => {
            const script = document.createElement("script")
            script.src = item.src
            script.async = true
            document.body.appendChild(script)
        })
    }

    render() {
        return (
            <sidebar id="sidebar">
                <div className="deznav">
                    <div className="deznav-scroll">
                        <ul className="metismenu" id="menu">
                            <li><a href="/" className="has-arrow ai-icon" aria-expanded="false">
                                <i className="flaticon-381-networking"></i>
                                <span className="nav-text">Pencatatan Barang</span>
                            </a>
                            </li>
                            <li><a href="/cekharga" className="has-arrow ai-icon" aria-expanded="false">
                                <i className="flaticon-381-networking"></i>
                                <span className="nav-text">Cek Harga</span>
                            </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </sidebar>
        );
    }
}

export default Sidebar;