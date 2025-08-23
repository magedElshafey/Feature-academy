import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Nav } from "../../../../types/Nav";
interface FooterLinkListProps {
  title?: string;
  links: Nav[];
}

const FooterLinkList: React.FC<FooterLinkListProps> = ({ title, links }) => {
  const { t } = useTranslation();
  return (
    <nav aria-label={title || "Footer navigation"}>
      {title && (
        <h4 className="text-sm font-semibold mb-2 text-gray-200">{t(title)}</h4>
      )}
      <ul>
        {links.map((item, idx) => (
          <li key={idx} className="mb-2">
            <Link
              to={item.link}
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 rounded-sm"
            >
              {t(item.name)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterLinkList;
