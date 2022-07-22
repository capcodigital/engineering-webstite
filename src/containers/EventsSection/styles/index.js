import styled from "styled-components/macro";

const Wrapper = styled.div`
.events-container {
    background-color: #fff;
    color: #000; 
    height: auto;
    display: flex; 
    padding-bottom: 50px;
    padding-top: 40px;
}

.events-text {
    width: 450px;
    margin: auto 0 auto 24px;
    float: left;
    padding: 20px;
    flex: 1;
}

.events-image {
    width: 300px;
    height: 250px;
    background-color: grey;
    margin-right: 24px;
    float: left;
    padding: 20px;
    flex: 1;
}


`;

export default Wrapper;