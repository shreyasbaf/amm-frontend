import { Link } from "react-router-dom"
import styled from "styled-components"
// import Web3 from 'web3'

// const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545")

const DashboardWrap = styled.div<any>`
    display: grid;
    height: 100vh;
    place-items: center;
    color: white;

    span {
        margin: 10px 0;
        display: inline-block;
        width: 100%;
        text-align: center;
    }
`

const StyledLink = styled<any>(Link)`
    padding: 20px;
    background: white;
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CommonForm: React.FC = () => {
    // console.log('web3 object: ', web3);

    return <DashboardWrap>
        <div>
            <span>Example Navigation</span>
            {/* <StyledLink to={homePath}>Home</StyledLink> */}
        </div>
    </DashboardWrap>
}