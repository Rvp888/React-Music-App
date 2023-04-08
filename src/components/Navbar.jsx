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
          <span>{userInfo?.name}</span>
        </a>
      </div>
    </Container>
  )
}


const Container = styled.div``;