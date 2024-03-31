import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #3A3E46;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 56px;
  
  padding: 0 5rem;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AdressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  address {
    display: flex;
    flex-direction: column;
  }

  address span {
    font-size: .9rem;
    color: #FFFFFF;
    text-align: center;
  }
`

export const Logo = styled.img`
  width: 156px;
`

export const GoogleMapsLink = styled.a`
  img {
    width: 156px;
  }
`