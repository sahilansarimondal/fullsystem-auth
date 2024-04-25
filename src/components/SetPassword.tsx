import React from "react";
import FromWrapper from "./FromWrapper";
import InputField from "./ui/InputField";

type GroupPassword = {
  groupPassword: string;
  groupPasswordError: boolean;
};

type SetPasswordProps = GroupPassword & {
  updateFields: (fields: Partial<SetPasswordProps>) => void;
};

const SetPassword: React.FC<SetPasswordProps> = ({
  groupPassword,
  groupPasswordError,
  updateFields,
}) => {
  return (
    <FromWrapper
      heading="Set a group password"
      para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem harum beatae hic?"
    >
      <InputField
        type="password"
        label="password"
        placeholder="Set Password"
        onChange={(e) =>
          updateFields({ groupPassword: e.target.value })
        }
        value={groupPassword}
        error={groupPasswordError}
      />
    </FromWrapper>
  );
};

export default SetPassword;
