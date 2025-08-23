import type { Socials } from "../../../../types/Socials";
interface SocialLinksProps {
  socials: Socials[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ socials }) => {
  return (
    <nav aria-label="Social media">
      <ul className="flex items-center gap-3">
        {socials.map((item, idx) => (
          <li key={idx}>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit our ${item.icon.name} page`}
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 rounded-full"
            >
              <item.icon size={20} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialLinks;
