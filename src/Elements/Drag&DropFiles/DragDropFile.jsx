import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import styled from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FiFile } from "react-icons/fi";

const DragDropFile = () => {
  const fileTypes = ["JPEG", "PNG", "GIF"];
  const [file, setFile] = useState(null);
  const [IsShow, SetIsShow] = useState(false);
  const handleChange = (file) => {
    setFile(file);
    SetIsShow(true);
  };
  return (
    <>
      <Container>
        <CustomFileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        >
          <Heading>
            <FiFile /> Attach Files
          </Heading>
        </CustomFileUploader>
      </Container>
      {IsShow ? (
        <Path>
          <Text>{file?.name}</Text>
          <IconWrap onClick={() => SetIsShow(false)}>
            <IoMdCloseCircleOutline />
          </IconWrap>
        </Path>
      ) : null}
    </>
  );
};

export default DragDropFile;
const CustomFileUploader = styled(FileUploader)``;
const Container = styled.div`
  border: 2px ${({ theme }) => theme.primary} dashed;
  border-radius: 8px;
  width: 100%;
  height: 4rem;
  & label {
    background-color: ${({ theme }) => theme.ShadowDark};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & svg {
      & path {
        fill: ${({ theme }) => theme.primary};
      }
    }
    span {
      display: none;
    }
  }
`;
const Heading = styled.h1`
  font-weight: 400;
  font-size: 1.5rem;
  font-family: "Inter-Medium";
  color: ${({ theme }) => theme.primary};
`;
const Path = styled.div`
  width: calc(100% - 2rem);
  height: 4rem;
  padding: 0 1rem;
  border-radius: 8px;
  box-shadow: 2px 4px 2px -2px ${({ theme }) => theme.ShadowDark};
  background-color: ${({ theme }) => theme.backgroundDark};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0.8rem 0;
`;
const Text = styled.p`
  color: ${({ theme }) => theme.textDark};
  font-weight: 400;
  font-family: "Inter-Medium";
`;
const IconWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    fill: ${({ theme }) => theme.danger};
    font-size: 2rem;
    stroke-width: 0.2em;
  }
`;
