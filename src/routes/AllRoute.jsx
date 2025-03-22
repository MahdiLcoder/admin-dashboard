import Dashboard from '../pages/Dashboard'
import ManageTeam from '../pages/team/ManageTeam'
import Contact from '../pages/contact/Contacts'
import Invoices from '../pages/invoices/Invoices'
import Form from '../pages/Form'
import Calendar from '../pages/calender/Calendar'
import FAQ from '../pages/FAQ'
import BarChart from '../pages/BarChart'
import PieChart from '../pages/PieChart'
import LineChart from '../pages/LineChart'
import GeographyChart from '../pages/GeographyChart'
import { Route, Routes } from "react-router-dom"


function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<ManageTeam />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/Form" element={<Form />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/bar" element={<BarChart />} />
      <Route path="/pie" element={<PieChart />} />
      <Route path="/line" element={<LineChart />} />
      <Route path="/geography" element={<GeographyChart />} />
    </Routes>
  )
}

export default AllRoute