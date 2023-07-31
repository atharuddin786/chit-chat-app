import React, { useCallback, useState } from "react";
import { Button, Input, InputGroup, Message, toaster } from "rsuite";
import CheckIcon from "@rsuite/icons/Check";
import CloseOutlineIcon from "@rsuite/icons/CloseOutline";
import EditIcon from "@rsuite/icons/Edit";

export const EditableInput = ({
  initialValue,
  onSave,
  label = null,
  placeholder = "write your nickname",
  emptyMsg = "name cannot be empty",
  ...inputProps
}) => {
  const [input, setInput] = useState(initialValue);
  const [isEditable, setIsEditable] = useState(false);

  const onInputChange = useCallback((value) => {
    setInput(value);
  }, []);
  const onEditClick = useCallback(() => {
    setIsEditable((p) => !p);
  }, []);

  const trimmed = input.trim();

  const onSaveClick = async () => {
    if (trimmed === "") {
      toaster.push(
        <Message showIcon type="error">
          {emptyMsg}
        </Message>
      );
      return false;
    }
    if (trimmed !== initialValue) {
      await onSave(trimmed);
    }
    setIsEditable(false); //prevent from saving empty field
  };
  return (
    <div>
      {label}
      <InputGroup>
        <Input
          {...inputProps}
          disabled={!isEditable}
          placeholder={placeholder}
          onChange={onInputChange}
          value={input}
        />
        <Button onClick={onEditClick}>
          {isEditable ? <CloseOutlineIcon /> : <EditIcon />}
        </Button>
        {isEditable ? (
          <Button onClick={onSaveClick}>
            <CheckIcon />
          </Button>
        ) : null}
      </InputGroup>
    </div>
  );
};
