import styled from "styled-components"

const Container = styled.div`
    height: auto;
    background: #003049;
    color: white;
    text-align: center;
    padding: 0.8em 0;
    font-size: 16px;
`

const Announcement = () => {
  return (
   <Container>
       The way to get started is to quit talking and begin doing
   </Container>
  )
}

export default Announcement