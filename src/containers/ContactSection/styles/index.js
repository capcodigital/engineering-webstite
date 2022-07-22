import styled from "styled-components/macro";

const Wrapper = styled.div`
.contact-container {
    background-color: #fff;
    color: #000; 
    height: auto;
    display: flex; 
    padding: 120px 80px;
    align-items: center;
}

.contact-text {
    width: 60%;
    font-size: 36px;
    line-height: 50px;
}

.contact-buttons {
    display: grid;
    grid-template-columns: repeat(2, min-content);
    column-gap: 45px;
    justify-content: center;
    height: 100%;
    width: 40%;
}

.contact-button {
    height: 52px;
    width: 192px;
    background-color: #18A0FB;
    color: #000;
    border: 2px solid #18A0FB;
    border-radius: 6px;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
}

.contact-button--contact {
    background-color: #000;
    color: #18A0FB;
}

.contact-button--join {
    background-color: #18A0FB;
    color: #000;
}

`;

export default Wrapper;