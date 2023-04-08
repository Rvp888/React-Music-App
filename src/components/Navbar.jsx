import React from 'react';
import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useStateProvider } from '../utils/StateProvider';


export default function Navbar() {

  const [{ userInfo }] = useStateProvider();

  return (
    <Container>
      <div className="search_bar">
        <FaSearch />
        <input type="text" placeholder='Artists, Songs, or Podcasts' />
      </div>
      <div className="avatar">
        <a href="#">
          <CgProfile />
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 15vh;
  position: sticky;
  top: 0;
  transition: 0.3s ease-in-out;
  background-color: none;
  .search_bar {
    background-color: white;
    width: 30%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    input {
      border: none;
      height: 2rem;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }
`;