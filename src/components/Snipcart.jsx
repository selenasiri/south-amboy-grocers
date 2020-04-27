import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa'
import styled from 'styled-components'

const Snipcart = ({ className }) => {
  return (
    <div className={`${className} snipcart-checkout`}>
      <h5>
        <span className="title snipcart-items-count"></span>
        <span className="snipcart-total-price"></span>
      </h5>
      <FaCartArrowDown className="cart-icon " />
    </div>
  )
}

const SnipcartStyled = styled(Snipcart)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  &:hover {
    cursor: pointer;
  }

  .cart-icon {
    color: var(--primaryColor);
    font-size: 3rem;
    padding-right: 0.7rem;
  }

  h5 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
    transform: translateY(10px);
  }
  .title {
    font-size: 1.5rem;
    color: var(--mainBlack);
  }
  span {
    display: inline-block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`

export default SnipcartStyled
