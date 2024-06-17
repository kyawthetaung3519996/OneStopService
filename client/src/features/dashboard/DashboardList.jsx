import React from "react";
import NavbarTitle from "../../components/NavbarTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faTable, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

function DashboardList() {
  return (
    <>
      <NavbarTitle title="Dashboard" />
      <div className="container-fluid main-content mt-4">
        <div className="row mb-3">
          <div className="col-md-4">
            <div className="card text-white bg-primary mb-3">
              <div className="card-body">
                <h5 className="card-title">
                  <FontAwesomeIcon icon={faChartLine} className="me-2" />
                  Statistics
                </h5>
                <p className="card-text">Some quick stats overview.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-secondary mb-3">
              <div className="card-body">
                <h5 className="card-title">
                  <FontAwesomeIcon icon={faTable} className="me-2" />
                  Recent Activity
                </h5>
                <p className="card-text">Details about recent user activity.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-info mb-3">
              <div className="card-body">
                <h5 className="card-title">
                  <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                  Information
                </h5>
                <p className="card-text">General information and updates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardList;
