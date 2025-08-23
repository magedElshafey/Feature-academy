import { RiChatSmileFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import BadgIcon from "../../../common/BadgIcon";
const ChatIcon = () => {
  const { t } = useTranslation();
  return (
    <BadgIcon
      icon={<RiChatSmileFill size={20} className="text-green-500" />}
      label={t("chat")}
      count={2}
    />
  );
};

export default ChatIcon;
