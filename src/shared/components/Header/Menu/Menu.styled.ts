import styled from '@emotion/styled';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: auto;

  .menu-createMarker-button {
    border-radius: 40px;
    margin-right: 50px;
    outline: none;
    border: 1px solid black;
    margin-left: 25px;
  }
  .button-menu-link {
    text-decoration: none;
    font-family: OpenSans;
    font-size: 20px;
    color: black;
  }
  .menu-link {
    font-family: OpenSans;
    font-size: 15px;
    color: black;
    text-decoration: none;
    margin-right: 50px;
    line-height: 2;
    position: relative;
    :hover {
      color: purple;
    }
    :after {
      background-color: red;
      display: block;
      content: '';
      height: 2px;
      width: 10px;
      left: 50%;
      position: absolute;
      -webkit-transition: width 0.3s ease-in-out;
      -moz--transition: width 0.3s ease-in-out;
      transition: width 0.3s ease-in-out;
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      transform: translateX(-50%);
    }
  }
  .menu-link--active {
    color: blue;
  }

  a:hover:after,
  a:focus:after {
    width: 100%;
  }
  a:hover,
  a:focus {
    text-decoration: none;
    outline: none;
  }
  .logo {
    font-family: 'Roboto Slab', serif;
    font-weight: bold;
    margin: 10px 5px 5px 5px;
    float: left;
  }
  nav {
    float: right;
  }
  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  nav li {
    font-family: 'PT Sans Caption', sans-serif;
    font-size: 0.8em;
    margin-right: 1em;
    display: inline-block;
  }
  nav a {
    color: black;
  }
`;

export default StyledMenu;
