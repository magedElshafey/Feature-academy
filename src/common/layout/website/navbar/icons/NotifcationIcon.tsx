import { FaBell } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import BadgIcon from "../../../common/BadgIcon";
const NotifcationIcon = () => {
  const { t } = useTranslation();
  return (
    <BadgIcon
      icon={<FaBell size={20} className="text-orange-500" />}
      label={t("notifications")}
      count={1}
    />
  );
};

export default NotifcationIcon;
