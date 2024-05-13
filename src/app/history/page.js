"use client";
import HistoryTable from "@/components/HistoryTable";
// import GenaralLayout from "@/components/layout/GenaralLayout";
import Pagination from "@/components/Pagination";
import React, { useState } from "react";
import ExpenseTable from "@/components/ExpenseTable";
import {Container,Row} from "reactstrap";
import GenaralLayout from "@/components/layout/GenaralLayout";

function page() {
  // const [tab, setTab] = useState("");

  return (
    <GenaralLayout>
        <Container>
            <Row className=" py-5">
                <ExpenseTable />
            </Row>
        </Container>
    </GenaralLayout>
  );
}

export default page;
