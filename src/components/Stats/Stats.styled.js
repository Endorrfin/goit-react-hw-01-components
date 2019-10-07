import styled from 'styled-components';

const StyledItem = styled.li`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: ${props => props.color};
`;

export default StyledItem;
