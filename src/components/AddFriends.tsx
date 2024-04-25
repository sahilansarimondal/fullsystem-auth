import React from "react";
import InputField from "./ui/InputField";
import FromWrapper from "./FromWrapper";

type UserData = {
  email1: string;
  email1Error: boolean;
  email2: string;
  email3: string;
  email4: string;
};

type UserFromProps = UserData & {
  updateFields: (fields: Partial<UserFromProps>) => void;
};

const AddFriends: React.FC<UserFromProps> = ({
  email1,
  email1Error,
  email2,
  email3,
  email4,
  updateFields,
}) => {
  return (
    <FromWrapper
      heading="Add up to four friends"
      para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem harum beatae hic?"
    >
      <InputField
        type="email"
        label="First Friend"
        placeholder="example@example.com"
        onChange={(e) =>
          updateFields({ email1: e.target.value })
        }
        value={email1}
        error={email1Error}
      />
      <InputField
        type="email"
        label="email2"
        placeholder="example@example.com"
        onChange={(e) =>
          updateFields({ email2: e.target.value })
        }
        value={email2}
      />
      <InputField
        type="email"
        label="email3"
        placeholder="example@example.com"
        onChange={(e) =>
          updateFields({ email3: e.target.value })
        }
        value={email3}
      />
      <InputField
        type="email"
        label="email4"
        placeholder="example@example.com"
        onChange={(e) =>
          updateFields({ email4: e.target.value })
        }
        value={email4}
      />
    </FromWrapper>
  );
};

export default AddFriends;
