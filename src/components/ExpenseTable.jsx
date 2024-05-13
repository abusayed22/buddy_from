import React from 'react';
import {Table} from 'reactstrap'

const ExpenseTable = () => {
    return (
        <div>
            <div className="table-responsive">
                <Table className="table-bordered align-middle table-nowrap mb-0">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Status</th>
                        <th scope="col">Assignee</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="fw-medium">01</td>
                        <td>Implement new UX</td>
                        <td><span className="badge bg-primary-subtle text-primary">Backlog</span></td>
                        <td>Lanora Sandoval</td>
                        <td>$4,521</td>
                        <td>
                            <div className="dropdown">
                                <a href="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="ri-more-2-fill"></i>
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                    <li><a className="dropdown-item" href="#">View</a></li>
                                    <li><a className="dropdown-item" href="#">Edit</a></li>
                                    <li><a className="dropdown-item" href="#">Delete</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-medium">02</td>
                        <td>Design syntax</td>
                        <td><span className="badge bg-secondary-subtle text-secondary ">In Progress</span></td>
                        <td>Calvin Garrett</td>
                        <td>$7,546</td>
                        <td>
                            <div className="dropdown">
                                <a href="#" role="button" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="ri-more-2-fill"></i>
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                                    <li><a className="dropdown-item" href="#">View</a></li>
                                    <li><a className="dropdown-item" href="#">Edit</a></li>
                                    <li><a className="dropdown-item" href="#">Delete</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-medium">03</td>
                        <td>Configurable resources</td>
                        <td><span className="badge bg-success-subtle text-success">Done</span></td>
                        <td>Florence Guzman</td>
                        <td>$1,350</td>
                        <td>
                            <div className="dropdown">
                                <a href="#" role="button" id="dropdownMenuLink3" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="ri-more-2-fill"></i>
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink3">
                                    <li><a className="dropdown-item" href="#">View</a></li>
                                    <li><a className="dropdown-item" href="#">Edit</a></li>
                                    <li><a className="dropdown-item" href="#">Delete</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-medium">04</td>
                        <td>Implement extensions</td>
                        <td><span className="badge bg-secondary-subtle text-secondary ">In Progress</span></td>
                        <td>Maritza Blanda</td>
                        <td>$4,521</td>
                        <td>
                            <div className="dropdown">
                                <a href="#" role="button" id="dropdownMenuLink4" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="ri-more-2-fill"></i>
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink4">
                                    <li><a href="dropdown-item" to="#">View</a></li>
                                    <li><a className="dropdown-item" href="#">Edit</a></li>
                                    <li><a className="dropdown-item" href="#">Delete</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ExpenseTable;