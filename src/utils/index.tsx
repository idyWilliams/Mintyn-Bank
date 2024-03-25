import React from "react";
import {
//   FiOverview,
  FiCreditCard,
  FiCheckCircle,
  FiCircle,
  FiClipboard,
//   FiClockCircle,
  FiUser,
} from "react-icons/fi";
import { LuScrollText } from "react-icons/lu";
import { LuWallet } from "react-icons/lu";
import { RiDashboard2Line } from "react-icons/ri";
import { BsRecord2 } from "react-icons/bs";
import { MdOutlinePersonOutline } from "react-icons/md";

export const OverviewIcon = () => <RiDashboard2Line size={20} />;
export const AllPaymentsIcon = () => <LuWallet size={20} />;
export const ReconciledPaymentsIcon = () => <FiCheckCircle size={20} />;
export const UnReconciledPaymentsIcon = () => <FiCircle size={20} />;
export const ManualSettlementIcon = () => <BsRecord2 size={27} />;
export const AllOrdersIcon = () => <LuScrollText size={20} />;
// export const PendingOrdersIcon = () => <FiClockCircle size={20} />;
export const ReconciledOrdersIcon = () => <FiCheckCircle size={20} />;
export const MerchantProfileIcon = () => <MdOutlinePersonOutline size={20} />;
