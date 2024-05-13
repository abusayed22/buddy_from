
import DashBoradCard from '@/components/DashBoradCard'
import HistoryTable from '@/components/HistoryTable'
// import GenaralLayout from '@/components/layout/GenaralLayout'
import React from 'react'
import {Card, CardBody, Col, Container, Row} from 'reactstrap';
import {Dashboard} from "@/components/Dashboard";
import GenaralLayout from "@/components/layout/GenaralLayout";

function page() {
  return (
<GenaralLayout>
      <Container className="py-5 mt-5 ">
          <Row className="mt-5">
              <DashBoradCard />
              <DashBoradCard />
              <DashBoradCard />
          </Row>
          <Row>
            <HistoryTable />
          </Row>
      </Container>
</GenaralLayout>

    // <GenaralLayout>
    //   {/*<div className='w-[90%] md:w-[80%] mx-auto py-8'>*/}
    //     <div>
    //     <DashBoradCard />
    //     {/*<div className='mt-10 flex flex-col '>*/}
    //     {/*  <p className='underline p-1 text-indigo-600'>Recent Expense</p>*/}
    //     {/*  <div className=''></div>*/}
    //     {/*<HistoryTable />*/}
    //     {/*</div>*/}
    //
    //     {/*<Dashboard />*/}
    //   </div>
    // </GenaralLayout>
  )
}

export default page
