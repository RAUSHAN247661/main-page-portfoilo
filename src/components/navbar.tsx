import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Navbar as HeroNavbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useAuth } from "../context/auth-context";
import ThemeSwitcher from "./theme-switcher";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <HeroNavbar 
      isMenuOpen={isMenuOpen} 
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      className="bg-background/70 backdrop-blur-md"
      maxWidth="xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link to="/" className="flex items-center gap-2">
            <Icon icon="lucide:code" className="text-primary text-2xl" />
            <span className="font-bold text-foreground text-xl">DevSkillHub</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.path} isActive={isActive(item.path)}>
            <Link 
              to={item.path}
              className={`text-sm ${isActive(item.path) ? 'text-primary font-medium' : 'text-foreground'}`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <ThemeSwitcher />
        </NavbarItem>
        
        <NavbarItem>
          {isAuthenticated ? (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  color="primary"
                  name={user?.name}
                  size="sm"
                  className="cursor-pointer"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="User menu actions">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-bold">Signed in as</p>
                  <p className="font-medium text-sm">{user?.email}</p>
                </DropdownItem>
                <DropdownItem key="dashboard">My Dashboard</DropdownItem>
                <DropdownItem key="settings">Settings</DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={logout}>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Button 
              as={Link} 
              to="/auth/login" 
              color="primary" 
              variant="flat"
              size="sm"
            >
              Login
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <div className="flex flex-col gap-2 mt-4">
          {navItems.map((item) => (
            <NavbarMenuItem key={item.path}>
              <Link 
                to={item.path}
                className={`w-full text-lg ${isActive(item.path) ? 'text-primary font-medium' : 'text-foreground'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem className="mt-4">
            <ThemeSwitcher />
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroNavbar>
  );
};

export default Navbar;