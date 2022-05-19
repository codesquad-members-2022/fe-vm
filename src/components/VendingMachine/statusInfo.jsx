import React from 'react';
import styled from 'styled-components';
import { Default_radius, Color } from 'Assets/Style/Common';

const StatusInfo = () => {
  return (
    <StatusInfoBox>
      <StatusWindow>
        <StatusLine>
          <PointWord>500원</PointWord>
          <Sentence>이 투입되었습니다.</Sentence>
        </StatusLine>
        <StatusLine>
          <PointWord>레인보우샤베트</PointWord>
          <Sentence>가 선택되었습니다.</Sentence>
        </StatusLine>
        <StatusLine>
          <PointWord>잔돈 500원</PointWord>
          <Sentence>이 반환되었습니다.</Sentence>
        </StatusLine>
        <StatusLine>
          <PointWord>1000원</PointWord>
          <Sentence>이 투입되었습니다.</Sentence>
        </StatusLine>
        <StatusLine>
          <PointWord>500원</PointWord>
          <Sentence>이 투입되었습니다.</Sentence>
        </StatusLine>
        <StatusLine>
          <PointWord>2000원</PointWord>
          <Sentence>이 투입되었습니다.</Sentence>
        </StatusLine>
        <StatusLine>
          <PointWord>500원</PointWord>
          <Sentence>이 투입되었습니다.</Sentence>
        </StatusLine>
      </StatusWindow>
    </StatusInfoBox>
  );
};

const Sentence = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #9ea8b2;
`;

const PointWord = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: ${Color.white};
`;

const StatusLine = styled.div`
  display: flex;
  align-items: center;
  padding: 1.6rem 1rem;
  width: 43rem;
  height: 2.2rem;
  border-bottom: 1px solid ${Color.lightGray};
`;

const StatusWindow = styled.div`
  display: flex;
  flex-direction: column;
  height: 40.6rem;
  background-color: ${Color.black};
  align-items: flex-start;
  padding: 12px 20px 20px;
  border-radius: 10px;
`;

const StatusInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 6rem;
  width: 48rem;
  height: 47rem;
  gap: 12px;
`;

export default StatusInfo;
