import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { TbMailPlus } from "react-icons/tb";
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { RiAccountCircleFill } from "react-icons/ri";

const Menu = [
    {
        name: 'Início',
        path: 'home',
        icon: <GoHome size={28} />,
        iconActive: <GoHomeFill size={28} />,
    },
    {
        name: 'Indique e Ganhe',
        path: 'invite',
        icon: <TbMailPlus size={26}/>,
    },
    {
        name: 'Saque',
        path: 'withdraw',
        icon: <BiMoneyWithdraw size={26}/>,
    },
    {
        name: 'Depósito',
        path: 'wallet',
        icon: <IoWalletOutline size={26}/>,
        iconActive: <IoWallet size={26}/>,
    },
    {
        name: 'Suporte',
        path: 'support',
        icon: <BiSupport size={26}/>,
    },
    {
        name: 'Perfil',
        path: 'profile',
        icon: <RiAccountCircleLine size={28}/>,
        iconActive: <RiAccountCircleFill size={28}/>,
    },
]

export default Menu;