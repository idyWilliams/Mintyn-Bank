import React from "react";

interface OrderData {
  pending: number;
  reconcilled: number;
  total: number;
}

interface PaymentData {
  unReconcilled: number;
  reconcilled: number;
  total: number;
}

const orderData: OrderData = {
  pending: 20,
  reconcilled: 80,
  total: 100,
};

const paymentData: PaymentData = {
  unReconcilled: 20,
  reconcilled: 80,
  total: 100,
};

const ProgressCard: React.FC = () => {
  const calculateProgressPercentage = (value: number, total: number) => {
    return (value / total) * 100;
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-black mb-2">Orders</h3>
        <div className="w-full bg-warning rounded-full h-2 mb-2">
          <div
            className="bg-success rounded-full h-2"
            style={{
              width: `${calculateProgressPercentage(
                orderData.reconcilled,
                orderData.total
              )}%`,
            }}
          ></div>
        </div>
        <p className="mb-1 text-black font-light">
          Pending Orders: <span className="font-bold text-warning">{orderData.pending}</span>
        </p>
        <p className="mb-1 text-black font-light">
          Reconciled Orders:{" "}
          <span className="font-bold text-success">{orderData.reconcilled}</span>
        </p>
        <p className="mb-1 text-black font-light">
          Total Orders: <span className="font-bold text-blue">{orderData.total}</span>
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg text-black font-semibold mb-2">Payments</h3>
        <div className="w-full bg-warning rounded-full h-2 mb-2">
          <div
            className="bg-success rounded-full h-2"
            style={{
              width: `${calculateProgressPercentage(
                paymentData.reconcilled,
                paymentData.total
              )}%`,
            }}
          ></div>
        </div>
        <p className="mb-1 text-black font-light">
          Un-reconcilled Payments:{" "}
          <span className="font-bold text-warning">{paymentData.unReconcilled}</span>
        </p>
        <p className="mb-1 text-black font-light">
          Reconcilled Payments:{" "}
          <span className="font-bold text-success">{paymentData.reconcilled}</span>
        </p>
        <p className="mb-1 text-black font-light">
          Total Payments: <span className="font-bold text-blue">{paymentData.total}</span>
        </p>
      </div>
    </div>
  );
};

export default ProgressCard;
