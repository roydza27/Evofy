// Icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EventIcon from "@mui/icons-material/Event";
import HistoryIcon from "@mui/icons-material/History";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import StarsOutlinedIcon from "@mui/icons-material/StarsOutlined";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";

import LogoIcon from "../Logo/LogoIcon";

const Menuitems = [
  // Main Menu
  { title: "Home", icon: HomeOutlinedIcon, href: "/home" },
  { title: "Popular", icon: TrendingUpOutlinedIcon, href: "/popular" },
  { title: "Explore", icon: ExploreOutlinedIcon, href: "/explore" },
  { title: "All", icon: FeedOutlinedIcon, href: "/all" },

  // Custom Feeds (Collapsible)
  {
    title: "Create Events",
    icon: EventIcon,
    collapsible: true,
    children: [
      { title: "Create a New Event", icon: AddOutlinedIcon, href: "/create-feed" },
      { title: "CFS", icon: FeedOutlinedIcon, href: "/custom-feed/cfs", favorite: true },
    ],
  },

  // Recent (Collapsible)
  { title: "Recent", icon: HistoryIcon, collapsible: true, children: [] },

  // Communities & Policies
  { title: "Communities", icon: GroupsOutlinedIcon, href: "/communities" },
  { title: "Best of Events", icon: StarsOutlinedIcon, href: "/best-of-reddit" },
  { title: "Evofy Rules", icon: TopicOutlinedIcon, href: "/rules" },
  { title: "Privacy Policy", icon: TopicOutlinedIcon, href: "/privacy" },
  { title: "User Agreement", icon: TopicOutlinedIcon, href: "/terms" },
];

export default Menuitems;
