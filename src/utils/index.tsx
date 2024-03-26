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
import phone from "/public/image/phone.webp";
import mac from "/public/image/mac.webp";


export const mockData = [
  {
    product: 'Apple Mac Book 15" 250 SSD 12GB',
    price: 7343.0,
    serialNumber: 12345678901,
    time: "12:30",
    status: "Reconciled",
    imageLink: mac,
  },
  {
    product: 'Apple Mac Book 15" 250 SSD 12GB',
    price: 7343.0,
    serialNumber: 12345678902,
    time: "12:30",
    status: "Pending",
    imageLink: mac,
  },
  {
    product: 'Apple Mac Book 15" 250 SSD 12GB',
    price: 7343.0,
    serialNumber: 12345678903,
    time: "12:30",
    status: "Un-reconciled",
    imageLink: mac,
  },
  {
    product: 'Apple Mac Book 15" 250 SSD 12GB',
    price: 7343.0,
    serialNumber: 12345678904,
    time: "12:30",
    status: "Reconciled",
    imageLink: mac,
  },
  {
    product: 'Apple Mac Book 15" 250 SSD 12GB',
    price: 7343.0,
    serialNumber: 12345678905,
    time: "12:30",
    status: "Pending",
    imageLink: mac,
  },
  {
    product: 'Apple Mac Book 15" 250 SSD 12GB',
    price: 7343.0,
    serialNumber: 12345678906,
    time: "12:30",
    status: "Reconciled",
    imageLink: mac,
  },
  {
    product: 'Apple Mac Book 15" 250 SSD 12GB',
    price: 7343.0,
    serialNumber: 12345678907,
    time: "12:30",
    status: "Un-reconciled",
    imageLink: mac,
  },
  {
    product: 'Apple Mac Book 15" 250 SSD 12GB',
    price: 7343.0,
    serialNumber: 12345678908,
    time: "12:30",
    status: "Reconciled",
    imageLink: mac,
  },
  {
    product: 'Apple Mac Book 15" 250 SSD 12GB',
    price: 7343.0,
    serialNumber: 12345678909,
    time: "12:30",
    status: "Pending",
    imageLink: mac,
  },
  {
    product: 'Apple Mac Book 15" 250 SSD 12GB',
    price: 7343.0,
    serialNumber: 12345678910,
    time: "12:30",
    status: "Un-reconciled",
    imageLink: mac,
  },
  {
    product: 'Apple Mac Book 15" 250 SSD 12GB',
    price: 7343.0,
    serialNumber: 12345678911,
    time: "12:30",
    status: "Reconciled",
    imageLink: mac,
  },
  {
    product: 'Apple Mac Book 15" 250 SSD 12GB',
    price: 7343.0,
    serialNumber: 12345678912,
    time: "12:30",
    status: "Pending",
    imageLink: mac,
  },
  {
    product: 'Apple Mac Book 15" 250 SSD 12GB',
    price: 7343.0,
    serialNumber: 12345678913,
    time: "12:30",
    status: "Un-reconciled",
    imageLink: mac,
  },
  {
    product: 'Apple Mac Book 15" 250 SSD 12GB',
    price: 7343.0,
    serialNumber: 12345678914,
    time: "12:30",
    status: "Reconciled",
    imageLink: mac,
  },
  {
    product: "Samsung Galaxy S21",
    price: 1299.99,
    serialNumber: 12345678915,
    time: "13:45",
    status: "Pending",
    imageLink: mac,
  },
  {
    product: "Samsung Galaxy S21",
    price: 1299.99,
    serialNumber: 12345678916,
    time: "13:45",
    status: "Reconciled",
    imageLink: mac,
  },
  {
    product: "Sony PlayStation 5",
    price: 499.99,
    serialNumber: 12345678917,
    time: "14:15",
    status: "Pending",
    imageLink: phone,
  },
  {
    product: "DJI Mavic Air 2",
    price: 799.99,
    serialNumber: 12345678918,
    time: "15:00",
    status: "Un-reconciled",
    imageLink: phone,
  },
];
