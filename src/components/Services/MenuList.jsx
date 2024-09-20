import { Link, useLocation } from "react-router-dom";

const MenuList = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <ul className="services-list">
        <li>
          <Link
            className={
              pathname === "/services/custom-crm-srm" ? "active" : null
            }
            to="/services/custom-crm-srm"
          >
            Custom CRM SRM
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname === "/services/software-development" ? "active" : null
            }
            to="/services/software-development"
          >
            Software Development
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname === "/services/web-development" ? "active" : null
            }
            to="/services/web-development"
          >
            Web Development
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname === "/services/ecommerce-development" ? "active" : null
            }
            to="/services/ecommerce-development"
          >
            E-commerce Development
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname === "/services/cloud-and-devops" ? "active" : null
            }
            to="/services/cloud-and-devops"
          >
            Cloud and DevOps
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/services/web-design" ? "active" : null}
            to="/services/web-design"
          >
            Website Design
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuList;
