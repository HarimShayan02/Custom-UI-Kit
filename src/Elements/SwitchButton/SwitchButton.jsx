import React from "react";
import Switch from "react-switch";
import styled from "styled-components";

const SwitchButton = ({
    uncheckedIcon,
    onChange,
    checked,
    checkedIcon,
    onColor,
    offColor,
    handleDiameter,
    isThin,
    ...rest
}) => {
    return (
        <div>
            <SwitchBtn
                isThin={isThin}
                {...rest}
                uncheckedIcon={uncheckedIcon}
                onChange={onChange}
                checked={checked}
                checkedIcon={checkedIcon}
                onColor={onColor}
                offColor={offColor}
                handleDiameter={handleDiameter}
            />
        </div>
    );
};
const SwitchBtn = styled(Switch)`
	margin-left: ${({ isThin }) => (isThin ? "0rem" : "0.5rem")};
	margin-right: ${({ isThin }) => isThin && "0.5rem"};
	.react-switch-bg {
		height: ${({ isThin }) => isThin && "22px"} !important;
		width: ${({ isThin }) => isThin && "52px "}!important;
	}
	.react-switch-handle {
		top: ${({ isThin }) => isThin && "3px "} !important;
	}
`;
export default SwitchButton;