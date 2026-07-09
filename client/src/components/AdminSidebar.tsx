import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div>
      <Link to="/admin">Dashboard</Link>
      <Link to="/admin/products">Our Product</Link>
    </div>
  );
};

export default AdminSidebar;
