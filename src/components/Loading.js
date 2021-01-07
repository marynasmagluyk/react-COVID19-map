import React from 'react';
import styled from 'styled-components';


const Loading = () => {
    return (
        <Wrapper>
            <div className="spinner-border text-danger"
                 role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-border text-info"
                 role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-border text-success"
                 role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.div`
height: 100vh;
display: flex;
justify-content: center; 
align-items: center;
`;

export default Loading;