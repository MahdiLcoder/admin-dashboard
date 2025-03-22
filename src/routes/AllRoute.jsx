import Dashboard from '../pages/Dashboard'
import ManageTeam from '../pages/team/ManageTeam'
import Contact from '../pages/Contact'
import Invoices from '../pages/Invoices'
import Profile from '../pages/Profile'
import Calendar from '../pages/Calendar'
import FAQ from '../pages/FAQ'
import BarChart from '../pages/BarChart'
import PieChart from '../pages/PieChart'
import LineChart from '../pages/LineChart'
import GeographyChart from '../pages/GeographyChart'
import { Route, Routes } from "react-router-dom"


function AllRoute() {
  return (
    <Routes>
        <Route path="/" element = {<Dashboard />} />
        <Route path="/team" element = {<ManageTeam />} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/invoices" element = {<Invoices />} />
        <Route path="/profile" element = {<Profile />} />
        <Route path="/calendar" element = {<Calendar />} />
        <Route path="/FAQ" element = {<FAQ />} />
        <Route path="/bar" element = {<BarChart />} />
        <Route path="/pie" element = {<PieChart />} />
        <Route path="/line" element = {<LineChart />} />
        <Route path="/geography" element = {<GeographyChart />} />
    </Routes>
  )
}

export default AllRoute