import styled from "styled-components/macro";

const Wrapper = styled.div`
  .culture-container {
    background-color: #000;
    padding: 120px 124px;
    color: #fff;
    justify-items: center;
    text-align: center;
  }

  .culture-title {
    margin:0;
    color: #fff;
    font-size: 48px;
    font-family: 'Montserrat';
    font-style: normal;
  }

  .culture-subtitle {
    margin: 50px 0;
    color: #fff;
    font-size: 36px;
    font-family: 'Montserrat';
    font-style: normal;
  }

  .culture-employees {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 84px;
    row-gap: 64px;
    margin: 100px 244px;
    align-items: center;
    justify-items: center;
  }

  .culture-employee {
    min-height: 76px;
    width: 100%;
    background-color: grey;
  }

`;

export default Wrapper;