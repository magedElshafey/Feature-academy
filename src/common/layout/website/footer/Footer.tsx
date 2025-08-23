import { useTranslation } from "react-i18next";
import FooterLinkList from "./FooterLinkList";
import SocialLinks from "./SocialLinks";
import { navLinks, socials } from "../../../../data/data";
const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full bg-background-dark py-6 text-white mt-6">
      <div className="containerr">
        <h3 className="text-lg lg:text-xl font-semibold mb-6 text-white">
          {t("important links")}
        </h3>

        <div className="grid-5 gap-6">
          <FooterLinkList links={navLinks.slice(0, 3)} />
          <FooterLinkList links={navLinks.slice(3, 6)} />
          <FooterLinkList links={navLinks.slice(6)} />
          <FooterLinkList
            links={[
              { name: "contact us", link: "/contact" },
              { name: "technical support", link: "/technical-support" },
            ]}
          />
          <SocialLinks socials={socials} />
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} {t("qutell technology")}.{" "}
          {t("all rights reserved")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
