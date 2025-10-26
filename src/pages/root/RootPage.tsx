import styled from "styled-components";

export default function RootPage() {
    return (
        <RootDiv>
            <RootImg src="/img/favicon.png" alt="" />
            <RootP>Sidee에서 함께할 팀원과 아이디어를 찾고 기록하며 성장하세요!</RootP>
            <RootBtn>시작하기</RootBtn>
        </RootDiv>
    )
}

const RootDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #FFF 0%, #F9FDFC 35.58%, #F7FCFB 66.35%, #DDF3EE 85.58%, #C1E9DF 99.99%, #B9E6DB 100%);
`;

const RootImg = styled.img`
    width: 194px;
    height: 208px;
`;

const RootP = styled.p`
    color: #2FBD8D;
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const RootBtn = styled.button`
    width: 197px;
    height: 74px;
    flex-shrink: 0;
    background-color: #2FBD8D;
    border-radius: 20px;
    color: white;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &:focus {
        outline: none;
        box-shadow: #2FBD8D;
    }
`;
