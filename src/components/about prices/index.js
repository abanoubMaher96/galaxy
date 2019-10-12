import React from 'react';
import { Prices, Table, TableTitle, TableSubTitle, TableUL, TableLI, Contain } from './style'

const AboutPrices= () =>{
    return(
        <Prices>
            <Contain className="row container justify-content-md-between justify-content-lg-around ">
                <Table className="col-lg-3 col-md-5">
                    <TableTitle>
                        $250/mo
                    </TableTitle>
                    <TableSubTitle>
                        starter plan
                    </TableSubTitle>
                    <TableUL>
                        <TableLI>Xeon 8 Cores 3.2GHz</TableLI>
                        <TableLI>RAM 32 GB</TableLI>
                        <TableLI>10 TB RAID 1</TableLI>
                        <TableLI>1,000 TB Transfer</TableLI>
                        <TableLI>24-hour Support</TableLI>
                    </TableUL>
                </Table>
                <Table className="col-lg-3 col-md-5" second>
                    <TableTitle second>
                        $420/mo
                    </TableTitle>
                    <TableSubTitle second>
                        standard plan
                    </TableSubTitle>
                    <TableUL second>
                        <TableLI>Xeon 16 Cores 3.2GHz</TableLI>
                        <TableLI>RAM 64 GB</TableLI>
                        <TableLI>20 TB RAID 1</TableLI>
                        <TableLI>2,000 TB Transfer</TableLI>
                        <TableLI>15-minute Quick Support</TableLI>
                    </TableUL>
                </Table>
                <Table className="col-lg-3 col-md-5">
                    <TableTitle>
                        $750/mo
                    </TableTitle>
                    <TableSubTitle>
                        premium plan
                    </TableSubTitle>
                    <TableUL>
                        <TableLI>Xeon 32 Cores 3.2GHz</TableLI>
                        <TableLI>RAM 128 GB</TableLI>
                        <TableLI>10 TB SSD RAID 10</TableLI>
                        <TableLI>6,000 TB Transfer</TableLI>
                        <TableLI>1-minute Instant Support</TableLI>
                    </TableUL>
                </Table>
            </Contain>
        </Prices>
    )
}

export default AboutPrices