import React from "react";
import FromWrapper from "./FromWrapper";
import InputField from "./ui/InputField";

type PaymentData = {
  planValue: string;
  CardHolderName: string;
  cardNumber: string;
};

type PaymentFormProps = PaymentData & {
  updateFields: (fields: Partial<PaymentFormProps>) => void;
};

const PaymentForm: React.FC<PaymentFormProps> = ({
  planValue,
  cardNumber,
  CardHolderName,
  updateFields,
}) => {
  return (
    <FromWrapper
      heading="Select a Plan"
      para="Lorem helo lorem werrn fiewfe noad g feiwhe woiewf howfeji fwoeijwe hoife."
    >
      <div className="flex flex-col gap-3 items-start">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="plan1"
            name="planvalue"
            value="9.95"
            onChange={(e) =>
              updateFields({ planValue: e.target.value })
            }
          />
          <label htmlFor="plan1">Plan 1 : $9.95</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="plan2"
            name="planvalue"
            value="15.95"
            onChange={(e) =>
              updateFields({ planValue: e.target.value })
            }
          />
          <label htmlFor="plan2">Plan 2 : $15.95</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="plan3"
            name="planvalue"
            value="24.95"
            onChange={(e) =>
              updateFields({ planValue: e.target.value })
            }
          />
          <label htmlFor="plan3">Plan 3 : $24.95</label>
        </div>
      </div>

      <InputField
        type="text"
        label="name"
        placeholder="Enter Name"
        onChange={(e) =>
          updateFields({ CardHolderName: e.target.value })
        }
        value={CardHolderName}
      />
      <InputField
        type="number"
        label="cardNumber"
        placeholder="Enter Card Number MM/YY CVC"
        onChange={(e) =>
          updateFields({ cardNumber: e.target.value })
        }
        value={cardNumber}
      />
    </FromWrapper>
  );
};

export default PaymentForm;
