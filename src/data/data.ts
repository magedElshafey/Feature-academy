import { Nav } from "../types/Nav";
import { Socials } from "../types/Socials";
import {
  FaFacebook,
  FaInstagram,
  FaBehance,
  FaLinkedin,
  FaSnapchatGhost,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const navLinks: Nav[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "courses",
    link: "/courses",
  },
  {
    name: "conferences",
    link: "/conferences",
  },
  {
    name: "Arab Training Stars",
    link: "/arab-training-stars",
  },
  {
    name: "team",
    link: "/team",
  },
  {
    name: "our clients",
    link: "/our-clients",
  },
  {
    name: "forums",
    link: "/forums",
  },
  {
    name: "branches",
    link: "/branches",
  },
];

export const socials: Socials[] = [
  {
    name: "whatsapp",
    url: "https://wa.me/+201022153359",
    icon: FaWhatsapp,
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/",
    icon: FaFacebook,
  },
  {
    name: "twitter",
    url: "https://www.twitter.com/",
    icon: FaXTwitter,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    name: "behance",
    url: "https://www.behance.com/",
    icon: FaBehance,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    icon: FaLinkedin,
  },
  {
    name: "snapchat",
    url: "https://www.snapchat.com/",
    icon: FaSnapchatGhost,
  },
];
export const protectedRoutes: string[] = [
  "/cart",
  "/checkout",
  "/payment",
  "/my-profile",
  "/my-wishlist",
  "/my-addresses",
  "/dashboard",
];
