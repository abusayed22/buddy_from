"use client"
import React from 'react'
import '../../public/assets/dashboard.css'
import { Card, CardBody, Col,Row } from 'reactstrap';
// import { Col, Container, Row } from 'reactstrap';
import CountUp from "react-countup";
function DashBoradCard() {
    return (
            <Col lg={4} md={6} >
                <Card>
                    <CardBody>
                        <div className="d-flex align-items-center">
                            <div className="avatar-sm flex-shrink-0">
                                    <span className="avatar-title bg-light text-primary rounded-circle fs-3">
                                        <i className={"align-middle " }></i>
                                    </span>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <p className="text-uppercase fw-semibold fs-12 text-muted mb-1">{"test"}</p>
                                <h4 className=" mb-0"> <CountUp start={0} end={454} decimals={5} separator={6} prefix={3} duration={3} />
                                </h4>
                            </div>
                            <div className="flex-shrink-0 align-self-end">
                                    <span >{"40%"} %<span>
                                    </span></span></div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
    )
}

export default DashBoradCard
