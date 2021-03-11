import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 15px auto;
  justify-content: space-evenly;
  align-items: center;

  width: 50%;

  border-bottom: 1px solid #cccc;
`;

export const FormPlatform = styled.form`
  display: flex;
  margin: 15px 0 15px 0;

  button {
    height: 50px;
  }
`;

export const RadioOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 100px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
  }
`;

export const SavedUsers = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
  margin: 40px 30px 40px 30px;
`;

export const UserInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  width: 315px;
  padding: 20px;

  border: 1px solid #ffbb00;
  border-radius: 5px;
  background-color: #f7f7f7;
`;
