import React, { useState } from 'react';
import defaultTableData from "../data/default-table-data";
import bfTableData from "../data/bf-table-data";
import putTableData from "../data/put-table-data";
import tabs from "../data/tab-items";

const Dashboard = () => {
  
    const [summaryData, setSummaryData] = useState(defaultTableData);
      
    const tabClick = (e) => {
        let selectedTab = e.target.getAttribute('data-id');
        const headers = { 'Content-Type': 'application/json' }
        if (selectedTab === 'BFTable') {
            fetch("https://run.mocky.io/v3/790641d5-77b6-43c1-8982-d7a1497ab23c", { headers })
                .then(
                    (result) => {
                        let resData = bfTableData;
                        setSummaryData(resData);
                    },
                    (error) => {
                      console.log('error', error)
                    }
                  )
        } else if (selectedTab === 'PUTTable') {
            fetch("https://run.mocky.io/v3/790641d5-77b6-43c1-8982-d7a1497ab23c", { headers })
            .then(
                (result) => {
                    let resData = putTableData;
                    setSummaryData(resData);
                },
                (error) => {
                  console.log('error', error)
                }
              )
        } else {
            setSummaryData(defaultTableData)
        }
    }
 
    const tabItems = tabs.map((tab) =>
        <li key={tab.id} onClick={tabClick} data-id={tab.id}>{tab.title}</li> 
    );
    
    return (
        <div>
            <div className="tabs">
                <ul className="tabs-header">
                    {tabItems}
                </ul>   
            </div>
            <table className="table-style">
                <thead>
                    <tr>
                        <td>Exp Date</td>
                        <td>ATM</td>
                        <td>25d R/R</td>
                        <td>10d R/R</td>
                        <td>25d B/F</td>
                        <td>10d B/F</td>
                    </tr> 
                </thead>
                <tbody>
                    {summaryData && summaryData.map((data, key) => {
                        return (
                            <tr key={key}>
                                <td>{data.expDate}</td>
                                <td>{data.ATM}</td>
                                <td>{data.RR25}</td>
                                <td>{data.RR10}</td>
                                <td>{data.BF25}</td>
                                <td>{data.BF10}</td>
                            </tr>
                        );
                    })}
                    {!summaryData && <div>No data found</div>}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;