import React from "react";

import Header from "../organisms/header";
import KPI from "../molecules/kpi";
import Layout from "../templates/layout";
import Menu from "../organisms/menu";
import Sales from "../molecules/sales";
import Traffic from "../molecules/traffic";

import { AttachMoneyOutlined, GroupOutlined, InsertChartOutlinedRounded, MoneyOutlined } from "@mui/icons-material";

function App() {

  const [kpiData, setKpiData] = React.useState([]);
  const [salesData, setSalesData] = React.useState([]);
  const [trafficData, setTrafficData] = React.useState([]);
  const [search, setSearch] = React.useState("")

// Kpi
  React.useEffect(() => {
    async function fetchKpiData() {
      const response = await fetch ('http://localhost:3004/kpi');
      const data = await response.json();
      setKpiData(data)
    }
    fetchKpiData();
  }, []);

// Sales
  React.useEffect(() => {
    async function fetchSalesData() {
      const response = await fetch ('http://localhost:3004/sales');
      const data = await response.json();
      setSalesData(data)
    }
    fetchSalesData();
  }, []);

  // Traffic
  React.useEffect(() => {
    async function fetchTrafficData() {
      const response = await fetch ('http://localhost:3004/traffic');
      const data = await response.json();
      setTrafficData(data)
    }
    fetchTrafficData();
  }, []);

  const [kpi1,kpi2,kpi3,kpi4] = kpiData;

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const getSearchResults = () => {
    console.log (`buscando datos con: ${search}`);
  }

  return (
    <div className="App">
      <Layout>
        <Header search={search} onSearch={getSearchResults} onSearchType={handleSearch}/>
        <Menu/>
        <KPI data={kpi1} icon={<MoneyOutlined/>} iconColor="#CD4344"/>
        <KPI data={kpi2} icon={<GroupOutlined/>} iconColor="#14BBA7"/>
        <KPI data={kpi3} icon={<InsertChartOutlinedRounded/>} iconColor="#FFAD27"/>
        <KPI data={kpi4} icon={<AttachMoneyOutlined/>} iconColor="#5146EC"/>
        <Sales data={salesData}/>
        <Traffic data={trafficData}/>
      </Layout>
    </div>
  );
}

export default App;