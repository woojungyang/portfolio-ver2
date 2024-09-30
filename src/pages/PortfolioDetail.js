import React, { useLayoutEffect, useMemo } from 'react';

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

  console.log(currentProject?.projectExecution?.execution);

  useLayoutEffect(() => {
    if (!currentProject?.name) navigation(-1);
  }, [currentProject]);
  return (
    <CommonLayout>
      <ContentWrapper isDay={isDayTheme}>
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
        <hr className="title-hr" />
        <p className="description-title">{currentProject?.name}</p>
        <p className="description">{currentProject?.description}</p>
        <div style={{ width: '100%' }}>
          <img src={currentProject.image} className="project-image" />
          <div className="project-detail-wrapper">
            <div className="project-side-bar">
              <div className="side-bar-wrap">
                <p className="side-bar-title">CLIENT</p>
                <p className="side-bar-content">{currentProject.client}</p>
              </div>
              <div className="side-bar-wrap">
                <p className="side-bar-title">SERVIECES</p>
                <p className="side-bar-content">{currentProject.service}</p>
              </div>
              <div className="side-bar-wrap" style={{ marginBottom: '-40px' }}>
                <p className="side-bar-title">Stacks</p>
                <div className="technology-wrap">
                  {currentProject.stacks.map((stack, index) => (
                    <p className="technology" key={index}>
                      {stack}
                    </p>
                  ))}
                </div>
              </div>
              <div className="side-bar-wrap">
                <p className="side-bar-title">WEBSITE</p>
                <p
                  className="side-bar-content"
                  style={{ cursor: 'pointer' }}
                  onClick={() => window.open(currentProject.webSite, '_blank')}
                >
                  {currentProject.webSite}
                </p>
              </div>
              <div className="side-bar-wrap">
                <p className="side-bar-title">FRONT-END PERSONNEL</p>
                <p className="side-bar-content">
                  {currentProject.personnel}
                  {currentProject?.personnel < 2 ? ' person' : ' people'}
                </p>
              </div>
            </div>
            <div className="project-content">
              <div className="project-section">
                <p className="project-section-title">Project Overview</p>
                <div className="project-section-content">
                  <p>{currentProject?.aboutProject}</p>
                  <div className="develop-info-wrap">
                    <div>
                      <p className="info-title">Development Period</p>
                      <div>
                        {currentProject.developmentPeriod.map((e, index) => (
                          <p key={index}>
                            *{index + 1}차 : {e}{' '}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="info-title">Repository(Users)</p>
                      <div>
                        {currentProject.repositories.map((e, index) => (
                          <span key={index}>
                            {e} {index + 1 < currentProject?.repositories.length && ','}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="info-title">Public Availability</p>
                      <p>{currentProject?.publicAvailability}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-section">
                <p className="project-section-title">Main Responsibilities & Tools Used</p>
                <p className="project-section-content">
                  {currentProject?.mainTasks.map((task, index) => (
                    <div className="task-wrap">
                      <p key={index}>{task.label}</p>
                      <p key={index}>{task.program}</p>
                    </div>
                  ))}
                </p>
              </div>
              <div className="project-section">
                <p className="project-section-title">The goal of the Project</p>
                <p className="project-section-content">{currentProject?.goalOfProject}</p>
              </div>
              <div className="project-section">
                <p className="project-section-title">Project Execution</p>
                <p className="project-section-content" style={{ whiteSpace: 'pre-line' }}>
                  {currentProject?.projectExecution?.execution}
                </p>
              </div>
              <div className="project-section">
                <p className="project-section-title">Project Challenges</p>
                <p className="project-section-content" style={{ whiteSpace: 'pre-line' }}>
                  {currentProject?.projectExecution?.challenges}
                </p>
              </div>
              <div className="project-section">
                <p className="project-section-title">Project Approaches</p>
                <p className="project-section-content" style={{ whiteSpace: 'pre-line' }}>
                  {currentProject?.projectExecution?.approaches}
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
    margin-bottom: 20px;
    line-height: 170%;
    text-align: center;
  }
  .type-wrap {
    width: 100%;
    display: flex;
    margin-bottom: 10px;
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
  .project-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .project-detail-wrapper {
    margin-top: 80px;
    margin-right: 50px;
    display: flex;
    width: 100%;

    left: 0px;
    top: 500px;

    .project-side-bar {
      position: sticky;
      top: 110px;
      z-index: 10;
      max-width: 300px;
      width: 100%;
      height: 100%;
      p {
        font-size: 20px;
      }
      .side-bar-wrap {
        width: 100%;
        overflow: hidden;

        margin: 20px 0px;
      }
      .side-bar-title {
        color: ${({ isDay }) => (isDay ? 'var(--color-background-600)' : 'rgba(225,225,225,0.8)')};
        font-weight: 600;
        margin-bottom: 16px;
      }
      .side-bar-content {
        font-weight: 500;
        margin-bottom: 40px;
        word-wrap: break-word;
        overflow-wrap: break-word;
        white-space: normal;

        &:last-child {
          margin-bottom: 0px;
        }
      }
      .technology-wrap {
        ${flex({ justify: 'flex-start' })};
        flex-wrap: wrap;
        margin-bottom: 40px;
        .technology {
          margin-right: 10px;
          line-height: 140%;
          margin-bottom: 0px;
          font-weight: 600;
          &:last-child {
            margin-right: 0px;
          }
        }
      }
    }
    .project-content {
      margin-left: 40px;
      height: 100%;
      width: 100%;

      /* font-size: 20px; */

      .project-section {
        margin: 40px 0px;
        padding-bottom: 30px;
        /* border-bottom:1px solid ${({ isDay }) =>
          !isDay ? 'var(--color-background-100)' : 'var(--color-dark-300)'};; */
        &:first-child {
          margin-top: 0px;
          .project-section-title {
            font-size: 38px;
          }
        }
      }
      .project-section-title {
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 20px;
      }
      .project-section-content {
        .develop-info-wrap {
          margin-top: 20px;
          background-color: rgba(225, 225, 225, 0.2);
          /* color: var(--color-dark-300); */
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding: 30px;
          gap: 10px;
          font-size: 15px;
          > div {
            ${flex({ justify: 'flex-start', direction: 'column', align: 'center' })};
            .info-title {
              font-weight: 600;
              font-size: 17px;
              text-decoration: underline;
            }
          }
        }
        line-height: 180%;
        font-size: 17px;
        text-align: justify;
        text-justify: inter-word;
        .task-wrap {
          ${flex({ justify: 'space-between' })};
          margin-bottom: 10px;
          &:last-child {
            margin-bottom: 0px;
          }
          padding: 5px 16px;
          border-bottom: 1px solid var(--color-background-300);
          font-size: 16px;

          p {
            &:last-child {
              font-style: italic;
              font-weight: 600;
              color: var(--color-background-600);
            }
          }
        }
      }
    }
  }

  @media (max-width: ${DeviceSize.Tablet}px) {
    .title-hr {
      width: 10%;
    }
    .description-title {
      font-size: 30px;
    }
    .description {
      font-size: 15px;
      text-align: left;
    }
    .type-wrap {
      .type {
        padding: 12px;
        font-size: 14px;
      }
    }

    .project-detail-wrapper {
      margin-top: 40px;
      margin-right: 0px;
      flex-direction: column;
      width: 100%;

      left: 0px;
      top: 0px;

      .project-side-bar {
        margin-bottom: 60px;
        position: relative;
        top: 0px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        max-width: 100%;
        width: 100%;

        p {
          font-size: 18px;
        }
        .side-bar-wrap {
          margin: 18px 0px;
        }
      }
      .project-content {
        margin-left: 0px;
        .project-section {
          margin: 60px 0px;
          padding-bottom: 30px;
          &:first-child {
            .project-section-title {
              font-size: 33px;
            }
          }
        }
        .project-section-title {
          font-size: 28px;
          margin-bottom: 20px;
        }
        .project-section-content {
          .develop-info-wrap {
            padding: 18px;
            font-size: 14px;
            > div {
              .info-title {
                font-size: 15px;
              }
            }
          }
          font-size: 16px;
          .task-wrap {
            margin-bottom: 8px;
            &:last-child {
              margin-bottom: 0px;
            }
            padding: 5px 14px;
            border-bottom: 1px solid var(--color-background-300);
            font-size: 14px;
          }
        }
      }
    }
  }

  @media (max-width: ${DeviceSize.Mobile}px) {
    .title-hr {
      width: 20%;
      border: 2px solid
        ${({ isDay }) => (isDay ? 'var(--color-dark-300)' : 'var(--color-background-100)')};
    }
    .description-title {
      font-size: 28px;
    }
    .description {
      font-size: 14px;
    }
    .project-detail-wrapper {
      .project-side-bar {
        max-width: 100%;
        margin-bottom: 40px;

        p {
          font-size: 16px;
        }
        .side-bar-wrap {
          margin: 10px 0px;
        }
      }
      .project-content {
        .project-section {
          margin: 50px 0px;
          padding-bottom: 25px;
          &:first-child {
            .project-section-title {
              font-size: 28px;
            }
          }
        }
        .project-section-title {
          font-size: 20px;
          margin-bottom: 20px;
        }
        .project-section-content {
          .develop-info-wrap {
            padding: 18px;
            font-size: 14px;
            grid-template-columns: repeat(2, 1fr);
            font-size: 15px;
            > div {
              width: 100%;
              &:first-child {
                grid-column: span 2;
              }
              .info-title {
                font-size: 14px;
              }
            }
          }
          font-size: 14px;
        }
      }
    }
  }
`;

export default React.memo(PortfolioDetail);

const badgeType = [
  { id: 1, name: 'toy', color: '#ffdeeb' },
  { id: 2, name: 'professional', color: '#d1e7dd' },
];

const works = [
  {
    id: 1,
    type: ['Toy'],
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
    mainTasks: [
      {
        label: '기획 & 웹디자인',
        program: 'Adobe express, pinterest',
      },
      {
        label: '웹 퍼블리싱',
        program: 'Scss',
      },
      {
        label: 'API 연동',
        program: 'Axios, React-Query',
      },
      {
        label: '프론트 개발',
        program: 'React',
      },
      {
        label: 'Mocking',
        program: 'Axios-mock-adapter',
      },
    ],
    publicAvailability: '공개',
    developmentPeriod: ['2024.05.16 ~ 2024.09.16'],
    repositories: ['Single Repository'],
    goalOfProject:
      'Wooteek는 혼자서 기획, 디자인, 개발까지 진행한 복합 쇼핑몰 프로젝트입니다. 다양한 쇼핑몰을 벤치마킹해, 사용자들이 이질감을 느끼지 않고 편리하게 쇼핑할 수 있는 환경을 제공하는 것이 목표였습니다. 모킹 데이터를 통해 쇼핑몰에 생동감을 부여하고, 일관된 사용자 경험을 유지하는 데 중점을 두었습니다.',
    projectExecution: {
      approaches:
        '우티크 프로젝트는 가상의 복합 쇼핑 플랫폼을 구축하여 사용자 경험을 크게 향상시키는 데 중점을 두었습니다. 다양한 쇼핑몰을 벤치마킹해 디자인의 일관성을 유지하면서도 각기 다른 카테고리와 상품을 조화롭게 배치하여, 사용자가 다양한 상품을 한눈에 확인하고 탐색할 수 있는 직관적인 UI를 구현했습니다. Mocking 데이터를 활용하여 현실감 있는 쇼핑 경험을 제공하고, Redux를 도입해 장바구니 기능을 효율적으로 구축함으로써 사용자들이 선택한 상품을 저장하고 관리하는 기능을 구현했습니다.\n또한, 필터링 및 정렬 기능을 통해 사용자 맞춤형 검색 경험을 제공하여, 다양한 카테고리의 상품을 더욱 빠르고 정확하게 찾을 수 있도록 했습니다. 이러한 작업 과정에서 유연한 상태 관리와 데이터 흐름을 고려하여 애플리케이션의 성능 최적화에도 주력했으며, 쇼핑몰 내에서 이루어지는 모든 인터랙션이 매끄럽게 진행되도록 노력했습니다. 이러한 종합적인 구현을 통해 사용자는 보다 풍부하고 몰입감 있는 쇼핑 경험을 누릴 수 있었습니다.',
      execution:
        '혼자서 디자인과 개발을 진행하며 각 파트의 중요성을 인식하였고, 사용자 경험을 극대화하기 위해 다양한 기능을 연구하고 구현했습니다. 반응형 웹 디자인을 통해 다양한 디바이스에서 최적의 성능을 제공하는 데 주력했습니다.',
      challenges:
        ' 기획서가 부재하여 지속적인 수정과 삭제가 필요했고, 혼자서 모든 작업을 진행해야 하므로 시간 관리에 어려움이 있었습니다. 다양한 쇼핑몰을 벤치마킹하는 과정에서 정보 수집이 힘들어 추가적인 노력이 필요했습니다.',
    },
  },
  {
    id: 2,
    type: ['Professional'],
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
      {
        label: 'API 연동',
        program: 'Axios, React-Query',
      },
      {
        label: '차트',
        program: 'React-charts',
      },
      {
        label: '프론트 개발',
        program: 'React',
      },
      {
        label: '채팅 서비스',
        program: 'CometChat',
      },
      {
        label: '다국어지원',
        program: 'React-i18next',
      },
      {
        label: 'Mocking',
        program: 'Axios-mock-adapter',
      },
    ],
    publicAvailability: '비공개 유료서비스',
    developmentPeriod: ['2023.03.31 ~ 2023.08.14', '2023.09.10 ~ 2024.04.18'],
    repositories: ['멘티', '멘토', '기업 관리자', '슈퍼 관리자'],
    goalOfProject:
      '멘티, 멘토, 기업 관리자, 슈퍼 관리자를 위한 각각의 대시보드를 제공하기 위해 역할별로 다른 컴포넌트 구조를 구현했습니다. 이를 통해 사용자마다 다른 기능을 수행할 수 있도록 했으며, 반응형 웹을 적용하여 다양한 기기에서 일관된 사용자 경험을 유지했습니다. 각 사용자 역할에 맞춘 데이터 필터링 및 조회 기능을 개발하여 필요한 데이터를 효율적으로 조회할 수 있도록 했고, 대시보드 차트와 채팅 서비스 연동을 통해 사용자와의 상호작용을 원활하게 처리했습니다. 다양한 상태 관리와 API 통신을 최적화하여 빠른 로딩 속도를 유지하며, 사용자 경험을 향상시켰습니다.',
    projectExecution: {
      approaches:
        '사수래 프로젝트에서는 멘티, 멘토, 기업 관리자, 슈퍼 관리자를 위한 각각의 역할에 맞춘 대시보드 기능을 구현했습니다. 사용자별로 필요한 정보를 직관적으로 확인할 수 있도록 각 페이지를 구성하고, 역할에 맞는 데이터를 관리하고 조회할 수 있는 기능을 제공했습니다.\n특히 CometChat 외부 서비스를 연동해 실시간 채팅 기능을 구축하여, 멘토와 멘티가 실시간으로 소통할 수 있도록 했습니다. 이 채팅 기능은 프로젝트에서 중요한 부분으로, API 통신을 통해 원활하게 데이터를 주고받을 수 있도록 구현했습니다.\n추가로, 데이터 조회 및 필터링 기능을 통해 사용자가 조건에 맞춰 데이터를 검색하고 필터링할 수 있도록 했습니다. 이를 위해 다양한 필터 옵션을 제공하여 사용자 인터페이스에서 빠르고 직관적인 데이터 관리가 가능하도록 개발했습니다.',
      execution:
        ' 사용자와 멘토 간의 소통을 원활하게 하기 위해 실시간 채팅 기능을 간단하게 구현했습니다. 이를 통해 사용자가 쉽게 멘토를 찾고 상담을 받을 수 있도록 하였으며, 사용자 요구에 맞춘 데이터 필터링 작업을 통해 맞춤형 경험을 제공했습니다. 프로젝트의 기획 과정에서 코드 컨벤션을 준수하여 팀원 간의 협업을 원활하게 하였습니다.',
      challenges:
        ' 여러 명의 코드 스타일을 하나로 통합하여 결합하는 과정이 쉽지 않았습니다. 각기 다른 스타일과 접근 방식을 조정하는 데 어려움이 있었고, 이러한 문제를 해결하기 위해 팀원들과의 긴밀한 소통이 필요했습니다. 또한, 여러 차례에 걸친 대규모 프로젝트로 인해 기획 파악에 많은 시간이 소요되었고, 초기 기획 단계에서부터 코드 컨벤션을 설정하고 이를 준수하도록 하여 협업의 일관성을 유지하는 것이 큰 도전이었습니다.',
    },
  },
  {
    id: 3,
    type: ['Professional'],
    name: 'EventPlus',
    description:
      '이벤트플러스는 온라인 이벤트 관리, 티켓팅 등 사용자가 손쉽게 이벤트를 계획하고 관리할 수 있는 기능을 제공하는 플랫폼입니다.',
    image: require('assets/logo/eventplus.png'),
    icon: require('assets/logo/eventplus-icon.png'),
    client: '(주)플러스닷',
    service: 'Web Responsive Development',
    stacks: ['Next.js', 'React-Query', 'Scss', 'CkEditor5'],
    webSite: 'https://www.eventplus.co.kr/',
    personnel: 2,
    aboutProject:
      'EventPlus는 온라인 이벤트 기획 및 관리, 그리고 티켓 판매 기능을 제공하는 플랫폼입니다. 이벤트 기획자는 간단한 과정으로 이벤트를 등록하고, 실시간으로 참가자를 관리할 수 있습니다. 또한, 참가자는 손쉽게 티켓을 구매하고 이벤트 관련 정보를 확인할 수 있습니다. 플랫폼은 실시간 참가자 통계와 함께 다양한 분석 도구를 제공하여 이벤트 성과를 추적할 수 있게 설계되었습니다.',
    mainTasks: [
      {
        label: '웹 퍼블리싱',
        program: 'Scss',
      },
      {
        label: 'API 연동',
        program: 'Axios, React-Query',
      },
      {
        label: '프론트 개발',
        program: 'React',
      },
      {
        label: '에디터',
        program: 'CKeditor5',
      },
    ],
    publicAvailability: '비공개 제휴회원서비스',
    developmentPeriod: ['2023.12.08 ~ 2024.03.28'],
    repositories: ['슈퍼 관리자', '파트너사', '고객'],
    goalOfProject:
      'EventPlus 프로젝트는 다양한 파트너사와 고객들이 이벤트를 효율적으로 관리하고, 그 과정을 원활하게 소통할 수 있도록 하는 대규모 이벤트 관리 플랫폼입니다. 유저가 작성한 이벤트 신청서를 손쉽게 처리하고, 슈퍼 관리자와 파트너사 간의 명확한 권한 분배와 데이터를 빠르고 정확하게 처리하는 시스템을 구축하는 것이 목표였습니다. 기획 단계부터 이벤트의 다양한 상태를 관리하고, 이를 바탕으로 사용자 경험을 극대화하는 것이 중요한 과제였습니다.',
    projectExecution: {
      approaches:
        '이벤트플러스 프로젝트는 효과적인 이벤트 관리 시스템을 성공적으로 구축하여 사용자 편의성을 증대시켰습니다. 재사용 가능한 컴포넌트를 통해 개발 효율성을 높였고, 참가자 통계를 제공하여 사용자에게 유용한 정보를 전달했습니다. 이러한 성과는 사용자들이 이벤트를 쉽게 관리하고 참여할 수 있도록 돕는 데 기여했습니다.',
      execution:
        ' 여러 파트너사가 동시에 사용할 수 있도록 시스템을 설계하였고, 이벤트 신청서 관리 기능을 최적화하여 사용자 경험을 향상시켰습니다. 데이터 구조를 체계적으로 설계하여 분석 도구를 제공함으로써 이벤트 관리의 효율성을 높였습니다. 또한, 사용자 피드백을 적극 반영하여 시스템을 지속적으로 개선하는 데 중점을 두었습니다.',
      challenges:
        ' 대규모 프로젝트로 인해 기획 파악에 많은 시간이 소요되었고, 기능 구현 과정에서 기술적 어려움이 있었습니다. 다양한 요구 사항을 충족시키기 위해 많은 조정이 필요했으며, 특히 사용자 요구에 맞춘 기능을 개발하는 데 있어 지속적인 테스트와 수정이 요구되었습니다.',
    },
  },
  {
    id: 4,
    type: ['Professional'],
    name: 'FitDoc',
    description:
      '핏닥은 개인 맞춤형 건강 관리 및 운동 프로그램을 제공하며, 사용자가 자신의 건강 상태에 맞는 운동과 식단을 계획하고 관리할 수 있도록 지원하는 플랫폼입니다.',
    image: require('assets/logo/fitdoc.png'),
    icon: require('assets/logo/fitdoc-icon.png'),
    client: '핏닥',
    service: 'Web Development, Mobile Development',
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
      {
        label: '웹 퍼블리싱',
        program: 'Scss',
      },
      {
        label: '앱 퍼블리싱',
        program: 'StyleSheet',
      },
      {
        label: 'API 연동',
        program: 'Axios, React-Query',
      },
      {
        label: '프론트 개발',
        program: 'React, React-Native',
      },
      {
        label: '에디터',
        program: 'CKeditor5',
      },
      {
        label: '인앱 결제',
        program: 'React-native-iap',
      },
      {
        label: 'TossPayment',
        program: 'Tosspayments/payment-sdk',
      },
    ],
    publicAvailability: '비공개 제휴회원서비스',
    developmentPeriod: ['2022.10.17 ~ 2023.03.02', '2023.08.24 ~ 2023.11.23'],
    repositories: [
      '고객 앱',
      '핏닥 전체 관리',
      '핏닥터 예약관리',
      '제휴회사 예약관리',
      '예약 전체관리',
    ],
    goalOfProject:
      'FitDoc 프로젝트는 사용자별로 맞춤화된 경험을 제공하는 헬스케어 플랫폼으로, 다양한 사용자층이 존재했습니다. 각 사용자가 서로 다른 요구 사항을 가지고 있기 때문에, 각각의 사용자 그룹(일반 사용자, 핏닥터, 슈퍼 관리자 등)에 맞춘 서비스를 제공하는 것이 목표였습니다. 이 프로젝트는 모바일 앱과 웹이 연동되어 일관된 사용자 경험을 제공하는 것에 중점을 두었습니다.',
    projectExecution: {
      approaches:
        '핏닥 프로젝트는 사용자 맞춤형 건강 관리 솔루션을 제공하는 데 중점을 두어, 다양한 기능을 구현하여 사용자의 편의성을 극대화했습니다. 웹과 모바일 간의 원활한 연동을 통해 사용자는 어느 기기에서든 쉽게 접근할 수 있었으며, API 연결을 통해 실시간으로 정확한 건강 정보를 제공함으로써 사용자들이 자신의 건강 상태에 맞는 운동과 식단을 효율적으로 관리할 수 있도록 했습니다.\n이 프로젝트에서는 다양한 플랫폼에 걸친 정보 전달의 일관성을 유지하기 위해 회원 전용 앱과 슈퍼관리자, 핏닥터 관리 시스템을 구축했습니다. 이러한 작업은 사용자가 자신의 정보를 체계적으로 관리할 수 있게 했으며, 각 사용자 유형에 맞는 기능을 제공하여 효율적인 데이터 관리를 가능하게 했습니다.\n또한, Ckeditor5를 활용하여 사용자들이 직접 텍스트와 이미지를 입력할 수 있는 기능을 추가했습니다. 이를 통해 사용자는 편리하게 개인의 운동 기록이나 건강 노트를 작성할 수 있었습니다. 이 과정에서 웹뷰(WebView) 패키지를 설치하여, Ckeditor5로 작성된 내용을 원활하게 렌더링할 수 있도록 처리하였고, 사용자 경험을 손상시키지 않으면서도 보다 유연하고 직관적인 편집 환경을 제공했습니다.\n사용자의 요구사항에 맞춘 맞춤형 인터페이스와 복잡한 기능을 통합하면서도 직관적인 사용자 경험을 제공한 덕분에 핏닥 프로젝트는 사용자들로부터 긍정적인 피드백을 받았으며, 사용자들이 자신의 건강 상태를 더욱 쉽게 관리할 수 있도록 하는 데 기여했습니다..',
      execution:
        '사용자 건강 데이터를 기반으로 맞춤형 프로그램을 제공하는 데 중점을 두었습니다. CKEditor5와의 스타일 조정을 통해 일관된 UI/UX를 유지하였고, 실시간 데이터를 활용하여 사용자 경험을 최적화했습니다. 이러한 전략은 사용자들이 플랫폼을 쉽게 이용할 수 있도록 도왔습니다.',
      challenges:
        '스타일 충돌 문제로 인해 개발 과정에서 어려움을 겪었고, API와 데이터 필터링 작업이 복잡하여 시간이 소요되었습니다. 처음으로 React Native를 적용하는 과정에서 많은 시행착오가 있었고, 모바일 환경에서의 테스트와 피드백 반영이 어려웠습니다.',
    },
  },
  {
    id: 5,
    type: ['Professional'],
    name: 'Driven',
    description:
      '드리븐은 AI 기반의 데이터 분석 및 비즈니스 인사이트를 제공하며 사용자가 데이터를 효율적으로 분석하고 실시간으로 비즈니스 성과를 모니터링할 수 있도록 지원하는 플랫폼입니다.',
    image: require('assets/logo/driven.png'),
    icon: require('assets/logo/driven-icon.png'),
    client: '(주)드리븐',
    service: 'Web Responsive Development',
    stacks: ['HTML', 'jQuery', 'css'],
    webSite: 'https://www.driven.co.kr/',
    personnel: 1,
    aboutProject:
      'Driven은 AI를 활용한 데이터 분석 플랫폼으로, 비즈니스 인사이트를 실시간으로 제공하여 사용자가 데이터를 보다 효율적으로 분석하고 모니터링할 수 있도록 지원합니다. 이 플랫폼은 대시보드를 통해 다양한 데이터 분석 결과를 시각적으로 제공하며, 데이터 기반 의사 결정을 돕습니다. 또한, 여러 데이터 소스를 통합하여 사용자가 보다 심층적인 분석을 수행할 수 있도록 설계되었습니다. Driven은 기업이 실시간으로 비즈니스 성과를 추적하고 최적화할 수 있는 맞춤형 분석 도구를 제공합니다.',
    mainTasks: [
      {
        label: 'UX/UI',
        program: 'Css',
      },
      {
        label: '다국어 번역',
        program: 'Html/JQuery',
      },
    ],
    publicAvailability: '홈페이지 리뉴얼 이슈로 확인불가',
    developmentPeriod: ['2022.09.22 ~ 2022.10.05'],
    repositories: ['Single Repository'],
    goalOfProject:
      'Driven 프로젝트는 다국어 지원을 통한 글로벌 사용자 확장이 목표였습니다. 사용자들이 언어 장벽 없이 서비스를 이용할 수 있도록 하고, 번역 품질을 유지하면서도 UI/UX에 영향을 주지 않도록 세심하게 관리해야 했습니다. 특히 번역 과정에서 발생할 수 있는 디자인 및 레이아웃의 변형을 최소화하는 것이 주요 과제였습니다.',
    projectExecution: {
      execution:
        ' 다국어 지원을 통해 다양한 사용자에게 접근할 수 있도록 하였고, UX/UI의 일관성을 유지하기 위해 번역 과정에서 발생하는 문제를 신속하게 해결했습니다.',
      approaches:
        ' 드리븐 프로젝트에서는 HTML, jQuery, CSS를 활용하여 다국어 번역 작업을 성공적으로 수행했습니다. 번역으로 인해 발생한 UX/UI의 문제를 수정하여 사용자 경험을 개선했습니다.',
      challenges:
        ' 번역 작업으로 인해 UX/UI가 틀어지는 문제가 발생했으며, 이를 수정하는 과정에서 시간과 노력이 필요했습니다. 단순한 코드 구조로 인해 수정이 어렵기도 했지만, 팀원들과의 협업을 통해 문제를 해결했습니다.',
    },
  },
  {
    id: 6,
    type: ['Professional'],
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
    mainTasks: [
      {
        label: '웹 퍼블리싱',
        program: 'Scss',
      },
      {
        label: 'API 연동',
        program: 'Axios',
      },
      {
        label: '프론트 개발',
        program: 'Next',
      },
      {
        label: '다국어지원',
        program: 'React-i18next',
      },
    ],
    publicAvailability: '운영확인불가',
    developmentPeriod: ['2023.06.02 ~ 2023.08.01'],
    repositories: '단일 레파지토리',
    goalOfProject:
      'BIZA SWAP 프로젝트는 암호화폐와 관련된 금전 거래를 지원하는 플랫폼으로, 데이터의 정확성과 보안을 극대화하는 것이 핵심 목표였습니다. 특히 글로벌 사용자들이 쉽게 접근할 수 있도록 다국어 지원을 포함하며, 이를 통해 사용자의 편의성과 국제적 확장성을 동시에 추구했습니다. 또한 사용자들이 복잡한 프로세스를 최소한의 절차로 안전하게 처리할 수 있도록 UI와 UX 디자인에 중점을 두었습니다.',
    projectExecution: {
      approaches:
        '비자스왑 프로젝트에서는 다국어 지원을 통해 다양한 국가의 사용자들이 편리하게 플랫폼을 이용할 수 있도록 했습니다. 각 언어별 번역 작업을 꼼꼼하게 수행하여, 사용자가 자신의 언어로 손쉽게 서비스를 이해하고 사용할 수 있도록 했으며, 유효성 검사 기능을 통해 입력 데이터의 정확성을 보장하여 사용자 신뢰를 강화했습니다. 이러한 유효성 검사 시스템을 통해 사용자들이 거래 과정에서 발생할 수 있는 실수를 미연에 방지할 수 있었으며, 안전하고 신뢰할 수 있는 거래 환경을 제공하는 데 주력했습니다.\n또한, 재사용 가능한 컴포넌트를 도입하여 코드의 일관성을 유지하고, 개발 과정에서의 효율성을 높였습니다. 이로 인해 개발 속도가 향상되었을 뿐만 아니라, 유지보수 작업도 훨씬 수월해졌습니다. 특히, 사용자 피드백을 적극적으로 반영하여 플랫폼을 지속적으로 개선하는 데 집중했으며, 이를 통해 다양한 기능과 UI를 점진적으로 개선하여 사용자 만족도를 높였습니다.\n비자스왑 프로젝트는 복잡한 금융 거래 환경에서도 안정적인 사용자 경험을 제공하는 데 성공하였으며, 다양한 국가의 사용자들이 플랫폼을 쉽게 접근하고 이용할 수 있는 글로벌한 서비스를 구축함으로써 프로젝트 목표를 달성했습니다.',
      execution:
        ' 암호화폐 거래의 안전성을 확보하기 위해 프론트엔드에서 유효성 검사를 철저히 진행했습니다. 다국어 번역을 통해 글로벌 사용자층을 겨냥하고, 컴포넌트화를 통해 개발 속도를 높였습니다. 이러한 전략은 혼자 작업하는 과정에서도 효율성을 극대화하는 데 기여했습니다.',
      challenges:
        ' 개발 일정에 맞춰 작업 속도를 조절하는 것이 어려웠고, 다국어 번역 작업이 추가되어 작업 속도가 더뎠습니다. 특히, 암호화폐의 민감한 특성으로 인해 보안 문제에 대한 중압감을 느끼며, 규정을 준수하는 데 많은 노력이 필요했습니다. 혼자서 모든 작업을 진행하다 보니 시간 관리와 우선순위 설정이 큰 도전이었습니다.',
    },
  },
];
