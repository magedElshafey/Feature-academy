import { FaCartShopping } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import BadgIcon from "../../../common/BadgIcon";
const CartIcon = () => {
  const { t } = useTranslation();
  return (
    <BadgIcon
      icon={<FaCartShopping size={20} className="text-darkBlue" />}
      label={t("cart")}
      count={3}
    />
  );
};

export default CartIcon;
