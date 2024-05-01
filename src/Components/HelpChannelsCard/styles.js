import styled from "styled-components";

export const ContactCardElement = styled.div`
  width: 256px;
  height: 286px;
  background-color: #1c7ec220;
  padding: 2rem 1rem;
  border-radius: 5px;

  position: relative;
`;

export const CardHeader = styled.div`
  width: 100%;
`;

export const CardIcon = styled.img`
  width: 36px;
  margin-bottom: 1rem;
`;

export const CardTitle = styled.span`
  display: block;
  margin-bottom: 1rem;
  color: #23B40D;
`;

export const CardContent = styled.p`
  margin-bottom: 1rem;
`;

export const CardLink = styled.a`
  text-decoration: none;
  color: #1c7ec2;
  text-decoration: underline;

  position: absolute;
  bottom: 1rem;
`;
