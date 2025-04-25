import React from "react";
import { FaSearchLocation, FaLocationArrow } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "../Images/image.png";
import Bluebg from "../Images/Bluebg.jpg";

export default function HomeComponent() {
    return (
        <div style={{ backgroundColor: '#1e1f2f', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
            {/* Header */}
            <header className="d-flex flex-wrap justify-content-between align-items-center px-4 py-3 bg-white shadow-sm text-dark">
                <div className="d-flex align-items-center gap-4 flex-wrap">
                    <img src={image} alt="Logo" style={{ height: '50px' }} />
                    <nav className="d-flex gap-3 fw-medium flex-wrap">
                        <a href="#" className="nav-link">Home</a>
                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                Jobs
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Browse Jobs</a></li>
                                <li><a className="dropdown-item" href="#">Post a Job</a></li>
                                <li><a className="dropdown-item" href="#">Saved Jobs</a></li>
                            </ul>
                        </div>
                        <a href="#" className="nav-link">Companies</a>
                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                Services
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Resume Writing</a></li>
                                <li><a className="dropdown-item" href="#">Career Counselling</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <button className="btn text-white mt-3 mt-md-0" style={{ backgroundColor: '#f7931e', borderRadius: '50px', fontWeight: '600', padding: '0.5rem 1.5rem' }}>
                    Login / Register
                </button>
            </header>

            {/* Hero Section */}
            <section
                className="text-center py-5 px-3"
                style={{
                    backgroundImage: `url(${Bluebg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '85vh'
                }}
            >
                <h1 className="display-4 fw-bold text-secondary mt-5">Find Your Dream Jobs</h1>
                <h2 className="h2 fw-semibold text-white mb-5">Now - Here</h2>

                {/* Search Box */}
                <div className="row bg-white rounded shadow px-2 py-2 mx-auto align-items-center justify-content-center" style={{ maxWidth: '900px' }}>
                    {/* Job Input */}
                    <div className="col-12 col-md-5 d-flex align-items-center mb-3 mb-md-0">
                        <FaSearchLocation size={20} className="me-2 text-warning" />
                        <input
                            type="text"
                            className="form-control border-0 shadow-none"
                            placeholder="Job title, Keywords or Company..."
                        />
                    </div>

                    {/* Location Dropdown */}
                    <div className="col-12 col-md-4 d-flex align-items-center mb-3 mb-md-0 ps-3">
                        <FaLocationArrow size={20} className="me-2 text-warning" />
                        <select className="form-select border-0 shadow-none fw-medium">
                            <option>All Locations</option>
                            <option>New York</option>
                            <option>London</option>
                            <option>Dubai</option>
                        </select>
                    </div>

                    {/* Search Button */}
                    <div className="col-12 col-md-3 text-center text-md-end">
                        <button className="btn text-white fw-semibold px-4 py-2 w-100 w-md-auto" style={{ backgroundColor: '#f7931e', borderRadius: '50px' }}>
                            Search Jobs
                        </button>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="d-flex flex-wrap justify-content-center gap-5 text-center text-white " style={{ marginTop: 100 }}>
                    <div>
                        <p className="fs-4 fw-bold text-secondary">5.1M +</p>
                        <p className="text-secondary">Jobs registered on our system</p>
                    </div>
                    <div>
                        <p className="fs-4 fw-bold text-secondary">4.2M +</p>
                        <p className="text-secondary">4 million daily active users</p>
                    </div>
                    <div>
                        <p className="fs-4 fw-bold text-secondary">11K +</p>
                        <p className="text-secondary">Over 10k open job positions</p>
                    </div>
                </div>
            </section>

            {/* Styles */}
            <style>{`
                .nav-link {
                    color: #000;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                .nav-link:hover,
                .dropdown-item:hover {
                    color: #f7931e !important;
                }
                .dropdown-menu {
                    min-width: 200px;
                }
            `}</style>
        </div>
    );
}
