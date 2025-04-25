import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const AdminDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [openMenus, setOpenMenus] = useState({ documents: false, forms: false });
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const toggleSubmenu = (menu) => setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
            if (window.innerWidth < 768) {
                setSidebarOpen(false); // Close sidebar on small screens
            } else {
                setSidebarOpen(true);
            }
        };

        handleResize(); // Check on initial load
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="d-flex" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', transition: 'All 0.5s ease' }}>
            {/* Sidebar */}
            <div
                className={`bg-white border-end ${sidebarOpen ? 'w-250' : 'w-0 overflow-hidden'}`}
                style={{
                    transition: 'width 0.3s ease-in-out',
                    width: sidebarOpen ? '250px' : '0px',
                }}
            >
                <div className="d-flex justify-content-between align-items-center px-3 py-3 border-bottom fw-bold fs-5">
                    <span>AdminDashboard</span>
                    {!isMobile && <i className="bi bi-list" role="button" onClick={toggleSidebar}></i>}
                </div>
                <ul className="list-unstyled ps-0">
                    <li className="px-3 py-2 fw-bold text-primary">
                        <i className="bi bi-speedometer2 me-2"></i> Dashboard
                    </li>

                    {/* Documents */}
                    <li className="px-3 py-2" role="button" onClick={() => toggleSubmenu('documents')}>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="bi bi-file-earmark-text me-2"></i> Documents</span>
                            <i className={`bi ${openMenus.documents ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                        </div>
                    </li>
                    {openMenus.documents && (
                        <ul className="list-unstyled ps-4">
                            <li className="py-1"><i className="bi bi-folder2-open me-2"></i> View Documents</li>
                            <li className="py-1"><i className="bi bi-plus-circle me-2"></i> Add Document</li>
                        </ul>
                    )}

                    {/* Forms */}
                    <li className="px-3 py-2" role="button" onClick={() => toggleSubmenu('forms')}>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="bi bi-ui-checks-grid me-2"></i> Forms</span>
                            <i className={`bi ${openMenus.forms ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                        </div>
                    </li>
                    {openMenus.forms && (
                        <ul className="list-unstyled ps-4">
                            <li className="py-1"><i className="bi bi-journal-text me-2"></i> Form List</li>
                            <li className="py-1"><i className="bi bi-plus-circle me-2"></i> Create Form</li>
                        </ul>
                    )}

                    <li className="px-3 py-2"><i className="bi bi-table me-2"></i> Tables</li>
                    <li className="px-3 py-2"><i className="bi bi-pie-chart me-2"></i> Charts</li>
                    <li className="px-3 py-2"><i className="bi bi-person me-2"></i> Profile</li>
                    <li className="px-3 py-2"><i className="bi bi-gear me-2"></i> Setting</li>
                    <li className="px-3 py-2"><i className="bi bi-question-circle me-2"></i> F.A.Q</li>
                    <li className="px-3 py-2"><i className="bi bi-person-plus me-2"></i> Register</li>
                    <li className="px-3 py-2"><i className="bi bi-box-arrow-in-right me-2"></i> Login</li>
                    <li className="px-3 py-2"><i className="bi bi-file-earmark me-2"></i> Blank</li>
                </ul>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow-1">
                {/* Header */}
                <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-3">
                            {isMobile && (
                                <i className="bi bi-list fs-4" role="button" onClick={toggleSidebar}></i>
                            )}
                            <span className="fw-bold">AdminDashboard</span>
                            <div className="input-group d-none d-md-flex">
                                <input type="text" className="form-control" placeholder="Search" />
                                <span className="input-group-text bg-white">
                                    <i className="bi bi-search"></i>
                                </span>
                            </div>
                        </div>

                        {/* Profile Section - Positioned to the right */}
                        <div className="d-flex align-items-center gap-3" ref={dropdownRef}>
                            <i className="bi bi-bell fs-5 d-none d-md-block"></i>
                            <span >
                                {dropdownOpen && (
                                    <ul className="dropdown-menu dropdown-menu-end show  w-20" >
                                        <li className="px-3 py-2">
                                            <i className="bi bi-person-fill me-2"></i><strong>Username:</strong> F. David
                                        </li>
                                        <li className="px-3 py-2">
                                            <i className="bi bi-shield-lock me-2"></i><strong>Role:</strong> Admin
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li
                                            className="px-3 py-2 text-danger"
                                            role="button"
                                            onClick={() => alert('Logging out...')}
                                        >
                                            <i className="bi bi-box-arrow-right me-2"></i> Logout
                                        </li>
                                    </ul>
                                )}
                            </span>
                            <i className="bi bi-gear fs-5 d-none d-md-block"></i>

                            {/* Dropdown for Profile */}
                            <div
                                className="d-flex align-items-center gap-2 dropdown-toggle "
                                role="button"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                <i className="bi bi-person-circle fs-4"></i>
                                <span className="fw-semibold d-none d-md-block">F. David</span>

                            </div>

                        </div>
                    </div>
                </nav>


                {/* Content */}

                <div class="container">
                    <div class="row">
                        <div class="col-12 p-2">
                            <h4>Welcome to Admin Dashboard</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminDashboard;
