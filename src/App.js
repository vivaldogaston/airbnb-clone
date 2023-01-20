import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import grid from "./images/grid.png";
import styled from "styled-components";
import Card from "./Card";
import swimmer from "./images/image 12.png";
import wedding_photo from "./images/wedding-photography 1.png";
import mountain_bike from "./images/mountain-bike 1.png";
function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingBottom: "50px",
      }}
    >
      <Navbar />
      <Img src={grid} width="50%" />
      <Div>
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
        <CardsWrapper>
          <Card
            img={swimmer}
            alt="Life lessons with Katie Zaferes"
            price="136"
            rating={"5.0"}
            reviewCount={6}
            country="USA"
            tag="Sold out"
          />
          <Card
            img={wedding_photo}
            alt="Learn wedding photography"
            price="125"
            rating={"5.0"}
            reviewCount={30}
            country="USA"
            tag="Online"
          />
          <Card
            img={mountain_bike}
            alt="Group Mountain Biking"
            price="50"
            rating={"5.0"}
            reviewCount={2}
            country="USA"
          />
        </CardsWrapper>
      </Div>
    </div>
  );
}

export default App;
const Img = styled.img`
  margin: auto;
  margin-top: 40px;
`;
const Div = styled.div`
  padding-left: 100px;
`;
const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
`;
