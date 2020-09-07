import React, { useCallback } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";

const getColor = (props) => {
    if (props.isDragAccept) {
        return "#00e676";
    }
    if (props.isDragReject) {
        return "#ff1744";
    }
    if (props.isDragActive) {
        return "#2196f3";
    }
    return "#eeeeee";
};

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-width: 3px;
    border-radius: 3px;
    border-color: ${(props) => getColor(props)};
    border-style: dashed;
    background-color: #fafafa;
    color: #bdbdbd;
    outline: none;
    transition: border 0.24s ease-in-out;
`;

export default function Upload() {
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            console.log(`file: ${file.name}, ${file.type}, (${file.size} bytes)`);
        });
    }, []);

    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
        onDrop,
        accept: "image/*",
    });

    return (
        <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
            )}
        </Container>
    );
}
