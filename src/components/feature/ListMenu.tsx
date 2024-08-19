import { Bookmark, Home, Message, Notifications, Person, Search } from "@mui/icons-material";
const listMenu = [
  {
    icon: <Home sx={{ fontSize: { xs: 24, md: 32, lg: 40 } }} color="inherit" />,
    name: "Home",
    to: "home",
  },
  {
    icon: <Search sx={{ fontSize: { xs: 24, md: 32, lg: 40 } }} fontSize="large" />,
    name: "Explore",
    to: "explore",
  },
  {
    icon: <Message sx={{ fontSize: { xs: 24, md: 32, lg: 40 } }} fontSize="large" />,
    name: "Message",
    to: "message",
  },
  {
    icon: <Notifications sx={{ fontSize: { xs: 24, md: 32, lg: 40 } }} fontSize="large" />,
    name: "Notification",
    to: "notification",
  },
  {
    icon: <Bookmark sx={{ fontSize: { xs: 24, md: 32, lg: 40 } }} fontSize="large" />,
    name: "Bookmark",
    to: "bookmark",
  },
  {
    icon: <Home sx={{ fontSize: { xs: 24, md: 32, lg: 40 } }} fontSize="large" />,
    name: "Communities",
    to: "communities",
  },
  {
    icon: <Home sx={{ fontSize: { xs: 24, md: 32, lg: 40 } }} fontSize="large" />,
    name: "Premium",
    to: "premium",
  },
  {
    icon: <Person sx={{ fontSize: { xs: 24, md: 32, lg: 40 } }} fontSize="large" />,
    name: "Profile",
    to: "profile",
  },
];

export { listMenu };
