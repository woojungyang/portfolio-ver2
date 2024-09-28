import React, { useLayoutEffect, useMemo, useState } from 'react';
import classNames from 'classnames';

import styled from 'styled-components';
import { flex } from 'style/mixin';
import { useTheme } from 'context/themeProvider';

import CommonLayout from 'components/common/CommonLayout';
import { DeviceSize } from 'models/Device';
import { useNavigate, useParams } from 'react-router-dom';

const PortfolioDetail = () => {
  const navigation = useNavigate();
  const [themeMode] = useTheme();
  const isDayTheme = useMemo(() => themeMode == 'day', [themeMode]);

  const { projectName } = useParams();
  const currentProject = useMemo(
    () => works.find(e => e.name.toLowerCase() == projectName) ?? {},
    [projectName]
  );
  console.log(currentProject);

  const [hoverWork, setHoverWork] = useState('');

  useLayoutEffect(() => {
    if (!currentProject?.name) navigation(-1);
  }, [currentProject]);
  return (
    <CommonLayout>
      <ContentWrapper isDay={isDayTheme}>
        <hr className="title-hr" />
        <p className="description-title">{currentProject?.name}</p>
        <p className="description">{currentProject?.description}</p>
        <div className="type-wrap">
          {currentProject?.type?.map(type => {
            const badge = badgeType.find(badge => badge.name === type.toLocaleLowerCase());
            return (
              <p
                className="type"
                style={{
                  backgroundColor: badge ? badge.color : 'transparent',
                }}
              >
                {type}
              </p>
            );
          })}
        </div>
        <div style={{ width: '100%' }}>
          <img src={currentProject.image} className="project-image" />
          <div className="project-detail-wrapper">
            <div className="project-side-bar">
              <p className="side-bar-title">CLIENT</p>
              <p className="side-bar-content">{currentProject.client}</p>
              <p className="side-bar-title">SERVIECES</p>
              <p className="side-bar-content">{currentProject.service}</p>
              <p className="side-bar-title">Stacks</p>
              <div className="technology-wrap">
                {currentProject.stacks.map((stack, index) => (
                  <p className="technology" key={index}>
                    {stack}
                  </p>
                ))}
              </div>
              <p className="side-bar-title">WEBSITE</p>
              <p
                className="side-bar-content"
                style={{ cursor: 'pointer' }}
                onClick={() => window.open(currentProject.webSite, '_blank')}
              >
                {currentProject.webSite}
              </p>
              <p className="side-bar-title">FRONT-END PERSONNEL</p>
              <p className="side-bar-content">
                {currentProject.personnel}
                {currentProject?.personnel < 2 ? ' person' : ' people'}
              </p>
            </div>
            <div className="project-content">
              <div className="project-section">
                <p className="project-section-title">About the project</p>
                <p className="project-section-content"> {currentProject?.aboutProject}</p>
              </div>
              <div className="project-section">
                <p className="project-section-title">Repository Version</p>
                <p className="project-section-content">
                  {currentProject?.repositories.map((repository, index) => (
                    <span key={index}>
                      {repository}
                      {index + 1 < currentProject?.repositories.length && ', '}
                    </span>
                  ))}
                </p>
              </div>
              <div className="project-section">
                <p className="project-section-title">Duties</p>
                <p className="project-section-content">
                  {currentProject?.mainTasks.map((task, index) => (
                    <p key={index}>
                      {index + 1}. {task}
                    </p>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </CommonLayout>
  );
};

const ContentWrapper = styled.div`
  height: 100%;
  padding-bottom: 30px;
  flex: 1;
  flex-grow: 1;
  width: 100%;
  position: relative;
  margin-top: 10px;
  ${flex({ justify: 'flex-start', direction: 'column', align: 'flex-start' })};

  .title-hr {
    width: 8%;
    border: 3px solid
      ${({ isDay }) => (isDay ? 'var(--color-dark-300)' : 'var(--color-background-100)')};
  }
  .description-title {
    padding: 10px 0px;
    font-weight: 700;
    font-size: 40px;
 
  }
  .description {

    font-size: 17px;
    margin-top: 20px;
    line-height: 170%;
    text-align: center;
  }
  .type-wrap {
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    flex-wrap: wrap;

    .type {
      margin-top: 10px;
      background-color: ${({ isDay }) =>
        isDay ? 'var(--color-background-400)' : 'var(--color-background-100)'};
      color: var(--color-dark-300);
      margin-right: 10px;
      padding: 14px;
      border-radius: 5px;
      font-weight: 700;

      &:last-child {
        margin-right: 0px;
      }
    }
  }
  .project-image{
    width: 100%;
    height: 200px;
    object-fit: cover;
    
  }
  .project-detail-wrapper{
    margin-top: 80px;;
    margin-right: 50px;;
    display: flex;
    width: 100%;

      left: 0px;
    top:500px;
    
    
    .project-side-bar{
      position: sticky;
      top:110px;
      z-index: 10;
      max-width: 300px;
      width: 100%;
      height: 100%;
      p{
        font-size: 20px;
        margin-bottom: 20px;
        
        &:last-child{
          margin-bottom: 0px;
          
        }
      }
      .side-bar-title{
        color: ${({ isDay }) => (isDay ? 'var(--color-background-600)' : 'rgba(225,225,225,0.8)')};
        font-weight: 600;
        
      }
      .side-bar-content{
        font-weight: 600;
        margin-bottom: 40px;
        &:last-child{
          margin-bottom: 0px;
        }
      }
      .technology-wrap{
        ${flex({ justify: 'flex-start' })};
        flex-wrap: wrap;
        margin-bottom: 40px;
        .technology{
          margin-right: 10px;
          margin-bottom: 0px;
          font-weight: 600;
            &:last-child{
              margin-right: 0px;;
            }
        }
      }
  
    }
    .project-content{
      margin-left: 40px;
      height: 100%;
      width: 100%;
      /* font-size: 20px; */
      .project-section{
        margin: 40px 0px;
        padding-bottom: 30px;
        /* border-bottom:1px solid ${({ isDay }) =>
          !isDay ? 'var(--color-background-100)' : 'var(--color-dark-300)'};; */
        &:first-child{
          margin-top: 0px;
          .project-section-title{
            font-size: 38px;
          }
        }
        .project-section-title{
          font-size: 30px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .project-section-content{
          line-height: 180%;
          font-size: 17px;
          text-align: justify;
          text-justify: inter-word;
        }
      }
    }

  }

    /* .work-wrapper {
      margin-top: 60px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      cursor: pointer;

      .work-wrap {
        transition: transform 0.5s ease-in-out;
        ${flex({ justify: 'space-between', direction: 'column' })};
        padding: 40px;
        padding-top: 30px;
        background-color: ${({ isDay }) =>
          isDay ? 'var(--color-background-200)' : 'rgba(225,225,225,0.1)'};
        border-radius: 10px;
      }
      .work-name-wrap {
        ${flex({ justify: 'flex-start', align: 'center' })};
        margin: 16px 0px;
        img {
          width: 38px;
          margin-right: 10px;
        }
        .work-name {
          font-size: 40px;
          font-weight: 700;
          padding-top: 5px;
        }
      }

      .work-description {
        line-height: 180%;
        text-align: justify;
        text-justify: inter-word;
      }

      .work-image {
        margin-top: 20px;
        width: 100%;
        height: 200px;
        padding: 40px;
        background-color: var(--color-background-100);
        overflow: hidden;
        ${flex}

        img {
          width: 100%;
          height: auto;
          transition: transform 0.5s ease-in-out;
        }
      }

      &:hover {
        .work-image img {
          transform: scale(1.4);
        }
      }
    }
    .work-disabled {
      opacity: 0.4;
    } */
  }

  @media (max-width: ${DeviceSize.Tablet}px) {
    /* .work-wrapper {
      grid-template-columns: repeat(1, 1fr);
      .work-wrap {
        transition: none;
        .work-name-wrap {
          margin: 16px 0px;
          img {
            width: 35px;
          }
          .work-name {
            font-size: 35px;
          }
        }
        .work-image {
          img {
            transform: none;
          }
        }
        &:hover {
          .work-image img {
            transform: none;
          }
        }
        .work-description {
          line-height: 160%;
          font-size: 15px;
        }
      }
    } */
  }

  @media (max-width: ${DeviceSize.Mobile}px) {
    /* .title-hr {
      width: 10%;
      border: 2px solid
        ${({ isDay }) => (isDay ? 'var(--color-dark-300)' : 'var(--color-background-100)')};
    }
    .description-title {
      font-size: 35px;
    }
    .description {
      max-width: 90%;
      font-size: 14px;
    }
    .work-wrapper {
      margin-top: 30px;
      .work-wrap {
        .type-wrap {
          .type {
            padding: 12px;
            font-size: 14px;
            &:last-child {
              margin-right: 0px;
            }
          }
        }
        .work-name-wrap {
          margin: 16px 0px;
          img {
            width: 32px;
          }
          .work-name {
            font-size: 32px;
          }
        }
      }
      .work-description {
        line-height: 120%;
        font-size: 14px;
      }
    } */
  }
`;

export default React.memo(PortfolioDetail);

const badgeType = [
  { id: 1, name: 'toy', color: '#ffdeeb' },
  { id: 2, name: 'professional', color: '#d1e7dd' },
  { id: 3, name: 'react js', color: '#cfe2ff' },
  { id: 4, name: 'next js', color: '#ffe6b3' },
  { id: 5, name: 'html/jquery', color: '#ffcccb' },
  { id: 6, name: 'responsive', color: '#add8e6' },
  { id: 7, name: 'web development', color: '#fff3cd' },
  { id: 8, name: 'mobile development', color: '#e2f0e2' },
  { id: 9, name: 'react-native', color: '#e6f7ff' },
];

const works = [
  {
    id: 1,
    type: ['Toy', 'Web Development'],
    name: 'WOOTEEK',
    description: '다양한 브랜드와 트렌드를 한곳에서 즐기는 가상의 복합 쇼핑 플랫폼입니다.',
    image: require('assets/logo/wooteek.png'),
    icon: require('assets/logo/wooteek-icon.png'),
    client: 'WOOTEEK',
    service: 'Web Responsive Development',
    stacks: ['React', 'Redux', 'React-Query', 'Scss', 'Firebase', 'TossPayment'],
    webSite: 'https://wootkeek.web.app/',
    personnel: 1,
    aboutProject:
      'WOOTEEK은 무신사와 더블유컨셉과 같은 복합 쇼핑몰을 모델로 한 가상 쇼핑 플랫폼입니다. 다양한 브랜드와 최신 트렌드를 한곳에서 탐색할 수 있으며, 사용자는 필터링 기능을 통해 카테고리별로 손쉽게 원하는 상품을 찾을 수 있습니다. 이 플랫폼은 더미 데이터를 사용해 구축되었으며, 사용자 경험을 극대화하기 위해 직관적인 UI를 적용했습니다. 또한, 반응형 웹 디자인을 통해 다양한 디바이스에서 최적의 성능을 발휘하며, 모바일에서도 매끄러운 쇼핑 경험을 제공합니다.',
    mainTasks: ['기획', '웹디자인', '웹퍼블리싱', 'API 연동', 'Mocking'],
    developmentPeriod: '2024.05.16 ~ 2024.09.16',
    repositories: ['Single Repository'],
  },
  {
    id: 2,
    type: ['Professional', 'Web Development'],
    name: '사수래',
    description:
      '사수래는 멘토링 서비스 제공하며, 경력 개발을 원하는 사용자와 전문가 멘토를 연결하여 맞춤형 상담과 지도를 제공하는 플랫폼입니다.',
    image: require('assets/logo/sasurea.png'),
    icon: require('assets/logo/sasurea-icon.png'),
    client: '(주)인트윈',
    service: 'Web Development',
    stacks: ['React', 'Redux', 'React-Query', 'Scss', 'CometChat', 'i18n'],
    webSite: 'https://sasurae.kr/sasurae/main.do',
    personnel: 3,
    aboutProject:
      '사수래는 경력 개발과 성장을 원하는 사용자와 전문가 멘토를 연결해주는 멘토링 서비스 플랫폼입니다. 사용자는 간편한 회원 가입 후 자신의 경력 목표에 맞는 멘토를 찾을 수 있으며, 실시간 상담과 채팅을 통해 맞춤형 지도를 받을 수 있습니다. 또한, 멘토와의 상담 이력을 기록하고 관리할 수 있는 기능이 있어 장기적인 경력 개발 계획을 세우는 데 유용합니다. 이 프로젝트는 웹에서 실시간 상호작용을 지원하는 다양한 기술을 활용해 사용자에게 최상의 멘토링 경험을 제공합니다.',
    mainTasks: [
      'API 통신',
      '대시보드 차트',
      '채팅 서비스 연동',
      '데이터 필터링 및 조회',
      '다국어 번역 작업',
      'Mocking',
    ],
    developmentPeriod: ['2023.03.31 ~ 2023.08.14', '2023.09.10 ~ 2024.04.18'],
    repositories: ['멘티', '멘토', '기업 관리자', '슈퍼 관리자'],
  },
  {
    id: 3,
    type: ['Professional', 'Web Development'],
    name: 'EventPlus',
    description:
      '이벤트플러스는 온라인 이벤트 관리, 티켓팅 등 사용자가 손쉽게 이벤트를 계획하고 관리할 수 있는 기능을 제공하는 플랫폼입니다.',
    image: require('assets/logo/eventplus.png'),
    icon: require('assets/logo/eventplus-icon.png'),
    client: '(주)플러스닷',
    service: 'Web Development',
    stacks: ['Next.js', 'React-Query', 'Scss', 'CkEditor5'],
    webSite: 'https://www.eventplus.co.kr/',
    personnel: 2,
    aboutProject:
      'EventPlus는 온라인 이벤트 기획 및 관리, 그리고 티켓 판매 기능을 제공하는 플랫폼입니다. 이벤트 기획자는 간단한 과정으로 이벤트를 등록하고, 실시간으로 참가자를 관리할 수 있습니다. 또한, 참가자는 손쉽게 티켓을 구매하고 이벤트 관련 정보를 확인할 수 있습니다. 플랫폼은 실시간 참가자 통계와 함께 다양한 분석 도구를 제공하여 이벤트 성과를 추적할 수 있게 설계되었습니다.',
    mainTasks: ['웹 퍼블리싱', 'API 통신', '프론트 엔드 구현', 'CKeditor5 연동'],
    developmentPeriod: '2023.12.08 ~ 2024.03.28',
    repositories: ['슈퍼 관리자', '파트너사', '고객'],
  },
  {
    id: 4,
    type: ['Professional', 'Web Development', 'Mobile Development'],
    name: 'FitDoc',
    description:
      '핏닥은 개인 맞춤형 건강 관리 및 운동 프로그램을 제공하며, 사용자가 자신의 건강 상태에 맞는 운동과 식단을 계획하고 관리할 수 있도록 지원하는 플랫폼입니다.',
    image: require('assets/logo/fitdoc.png'),
    icon: require('assets/logo/fitdoc-icon.png'),
    client: '핏닥',
    service: 'Web Development, Mobile Responsive Development',
    stacks: [
      'React',
      'React Native',
      'Ckeditor5',
      'React-native-webview',
      'TossPayment',
      'React-native-iap',
    ],
    webSite: 'https://www.fitdoc.co.kr/',
    personnel: 1,
    aboutProject:
      'FitDoc은 사용자 맞춤형 건강 관리 솔루션을 제공하는 플랫폼으로, 운동 및 식단 프로그램을 사용자에게 맞춰 제안하고 관리할 수 있는 기능을 제공합니다. 사용자는 자신의 건강 상태와 목표를 입력하고, 이에 맞춘 운동 루틴과 식단을 추천받을 수 있으며, 이를 모바일 기기에서도 쉽게 접근하여 일정을 관리할 수 있습니다. 이 플랫폼은 실시간으로 데이터를 기반으로 피드백을 제공하며, 사용자에게 건강 관리에 대한 성취감을 제공합니다. 모바일과 웹 모두에서 최적의 경험을 제공하기 위해 반응형으로 설계되었습니다.',
    mainTasks: [
      '웹 퍼블리싱',
      'API 통신',
      '앱 퍼블리싱',
      'CKeditor5 연동',
      '인앱 결제',
      'TossPayment 연동',
    ],
    developmentPeriod: ['2022.10.17 ~ 2023.03.02', '2023.08.24 ~ 2023.11.23'],
    repositories: [
      '고객 앱',
      '핏닥 전체 관리',
      '핏닥터 예약관리',
      '제휴회사 예약관리',
      '예약 전체관리',
    ],
  },
  {
    id: 5,
    type: ['Professional', 'Web Development'],
    name: 'Driven',
    description:
      '드리븐은 AI 기반의 데이터 분석 및 비즈니스 인사이트를 제공하며 사용자가 데이터를 효율적으로 분석하고 실시간으로 비즈니스 성과를 모니터링할 수 있도록 지원하는 플랫폼입니다.',
    image: require('assets/logo/driven.png'),
    icon: require('assets/logo/driven-icon.png'),
    client: '(주)드리븐',
    service: 'Web Responsive Development',
    stacks: ['HTML', 'jQuery', 'i18n'],
    webSite: 'https://www.driven.co.kr/',
    personnel: 1,
    aboutProject:
      'Driven은 AI를 활용한 데이터 분석 플랫폼으로, 비즈니스 인사이트를 실시간으로 제공하여 사용자가 데이터를 보다 효율적으로 분석하고 모니터링할 수 있도록 지원합니다. 이 플랫폼은 대시보드를 통해 다양한 데이터 분석 결과를 시각적으로 제공하며, 데이터 기반 의사 결정을 돕습니다. 또한, 여러 데이터 소스를 통합하여 사용자가 보다 심층적인 분석을 수행할 수 있도록 설계되었습니다. Driven은 기업이 실시간으로 비즈니스 성과를 추적하고 최적화할 수 있는 맞춤형 분석 도구를 제공합니다.',
    mainTasks: ['다국어 번역 작업'],
    developmentPeriod: '2022.09.22 ~ 2022.10.05',
    repositories: ['Single Repository'],
  },
  {
    id: 6,
    type: ['Professional', 'Web Development'],
    name: 'BIZA SWAP',
    description:
      '비자스왑은 암호화폐의 분산형 거래소로 사용자 간의 직접 거래를 지원하여 빠르고 안전한 자산 교환을 가능하게 하는 플랫폼입니다.',
    image: require('assets/logo/bizaswap.png'),
    icon: require('assets/logo/bizaswap-icon.png'),
    client: 'AMAXG',
    service: 'Web Development',
    stacks: ['Next.js', 'i18n', 'Scss'],
    webSite: 'https://amaxg.bizauto.io/',
    personnel: 1,
    aboutProject:
      'BIZA SWAP은 사용자 간 암호화폐 거래를 지원하는 분산형 거래소로, 빠르고 안전한 거래를 가능하게 하는 플랫폼입니다. 사용자는 비트코인, 이더리움과 같은 다양한 암호화폐를 빠르게 거래할 수 있으며, 최신 블록체인 기술을 통해 보안성이 강화되었습니다. 또한, 사용자 친화적인 인터페이스와 실시간 거래 데이터를 제공하여 사용자가 손쉽게 거래를 수행할 수 있도록 설계되었습니다.',
    mainTasks: ['웹 퍼블리싱', '프론트 개발', '다국어 번역 작업'],
    developmentPeriod: '2023.06.02 ~ 2023.08.01',
    repositories: '단일 레파지토리',
  },
];
