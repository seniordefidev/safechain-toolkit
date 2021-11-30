import React from "react";
import { useTheme } from "styled-components";
import Heading from "../../components/Heading/Heading";
import getThemeValue from "../../util/getThemeValue";
import {
  ModalBody,
  StyledModalContainer,
  ModalHeader,
  ModalTitle,
  ModalContainer,
  ModalCloseButton,
  ModalBackButton,
} from "./styles";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "24px 0",
  headerBackground = "transparent",
  minWidth = "320px",
  ...props
}) => {
  const theme = useTheme();
  return (
    <ModalContainer minWidth={minWidth} {...props}>
      <StyledModalContainer>
        <ModalHeader background={getThemeValue(`colors.${headerBackground}`, headerBackground)(theme)}>
          <ModalTitle>
            {onBack && <ModalBackButton onBack={onBack} />}
            <Heading>{title}</Heading>
          </ModalTitle>
          {!hideCloseButton && <ModalCloseButton onDismiss={onDismiss} />}
        </ModalHeader>
        <ModalBody p={bodyPadding}>{children}</ModalBody>
      </StyledModalContainer>
    </ModalContainer>
  );
};

export default Modal;
