import React, { useMemo, useState } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { flex } from 'style/mixin';
import { useTheme } from 'context/themeProvider';

import CommonLayout from 'components/common/CommonLayout';
import { DeviceSize } from 'models/Device';

const Portfolio = () => {
  const navigation = useNavigate();

  const [themeMode] = useTheme();
  const isDayTheme = useMemo(() => themeMode == 'day', [themeMode]);

  const [hoverWork, setHoverWork] = useState('');

  return (
    <CommonLayout>
      <ContentWrapper isDay={isDayTheme}>
        <hr className="title-hr" />
        <p className="description-title">Portfolio</p>
        <p className="description">
          회사 프로젝트와 개인 작업물을 담은 포트폴리오입니다. 실무 경험과 창의적인 접근을 결합해
          완성한 작업물들로, 효율적인 코드 설계와 성능 최적화에 중점을 두었습니다.
        </p>
        <div className="work-wrapper">
          {works.map((work, index) => (
            <div
              className={classNames({
                'work-wrap': true,
                'work-disabled': hoverWork && hoverWork !== work.id,
              })}
              key={index}
              onMouseEnter={() => setHoverWork(work.id)}
              onMouseLeave={() => setHoverWork('')}
              onClick={() => navigation(`/portfolio/${work.name.toLowerCase()}`)}
            >
              <div style={{ width: '100%' }}>
                <div className="type-wrap">
                  {work.type.map(type => {
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
                <div className="work-name-wrap">
                  <img src={work.icon} />
                  <p className="work-name">{work.name}</p>
                </div>
                <p className="work-description">{work.description}</p>
              </div>
              <div
                className="work-image"
                style={{
                  backgroundColor: work.name == 'Driven' || work.name == 'WOOTEEK' ? 'black' : '',
                }}
              >
                <img src={work.image} alt="" />
              </div>
            </div>
          ))}
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
  ${flex({ justify: 'flex-start', direction: 'column' })};

  .title-hr {
    width: 8%;
    border: 3px solid
      ${({ isDay }) => (isDay ? 'var(--color-dark-300)' : 'var(--color-background-100)')};
  }
  .description-title {
    padding: 10px;
    font-weight: 700;
    font-size: 40px;
    text-align: center;
  }
  .description {
    max-width: 70%;
    font-size: 17px;
    margin-top: 20px;
    line-height: 170%;
    text-align: center;
  }
  .work-wrapper {
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
    }
  }

  @media (max-width: ${DeviceSize.Tablet}px) {
    .work-wrapper {
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
    }
  }

  @media (max-width: ${DeviceSize.Mobile}px) {
    .title-hr {
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
    }
  }
`;

export default React.memo(Portfolio);

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
    type: ['Toy', 'React JS', 'Responsive', 'Web Development'],
    name: 'WOOTEEK',
    description: '다양한 브랜드와 트렌드를 한곳에서 즐기는 가상의 복합 쇼핑 플랫폼입니다.',
    image: require('assets/logo/wooteek.png'),
    icon: require('assets/logo/wooteek-icon.png'),
  },
  {
    id: 2,
    type: ['Professional', 'React JS', 'Web Development'],
    name: '사수래',
    description:
      '사수래는 멘토링 서비스 제공하며, 경력 개발을 원하는 사용자와 전문가 멘토를 연결하여 맞춤형 상담과 지도를 제공하는 플랫폼입니다.',
    image: require('assets/logo/sasurea.png'),
    icon: require('assets/logo/sasurea-icon.png'),
  },
  {
    id: 3,
    type: ['Professional', 'Next JS', 'Web Development'],
    name: 'EventPlus',
    description:
      '이벤트플러스는 온라인 이벤트 관리, 티켓팅 등 사용자가 손쉽게 이벤트를 계획하고 관리할 수 있는 기능을 제공하는 플랫폼입니다.',
    image: require('assets/logo/eventplus.png'),
    icon: require('assets/logo/eventplus-icon.png'),
  },
  {
    id: 4,
    type: ['Professional', 'React JS', 'React-Native', 'Web Development', 'Mobile Development'],
    name: 'FitDoc',
    description:
      '핏닥은 개인 맞춤형 건강 관리 및 운동 프로그램을 제공하며, 사용자가 자신의 건강 상태에 맞는 운동과 식단을 계획하고 관리할 수 있도록 지원하는 플랫폼입니다.',
    image: require('assets/logo/fitdoc.png'),
    icon: require('assets/logo/fitdoc-icon.png'),
  },
  {
    id: 5,
    type: ['Professional', 'HTML/JQUERY', 'Responsive', 'Web Development'],
    name: 'Driven',
    description:
      '드리븐은 AI 기반의 데이터 분석 및 비즈니스 인사이트를 제공하며 사용자가 데이터를 효율적으로 분석하고 실시간으로 비즈니스 성과를 모니터링할 수 있도록 지원하는 플랫폼입니다.',
    image: require('assets/logo/driven.png'),
    icon: require('assets/logo/driven-icon.png'),
  },
  {
    id: 6,
    type: ['Professional', 'Next JS', 'Web Development'],
    name: 'BIZA SWAP',
    description:
      '비자스왑은 암호화폐의 분산형 거래소로 사용자 간의 직접 거래를 지원하여 빠르고 안전한 자산 교환을 가능하게 하는 플랫폼입니다.',
    image: require('assets/logo/bizaswap.png'),
    icon: require('assets/logo/bizaswap-icon.png'),
  },
];
