import Sidebar from "../components/sidebar";
import Clientes from "./Clientes";
export default function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Clientes />
    </div>
  );
  }