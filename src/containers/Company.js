import React from 'react'
import styled from 'styled-components'
import { Row, Col, Card } from 'antd'
import { shortDescription, title } from '../constants/placeholders'
import { dummySuppliers, dummyProducts } from '../constants/dummyData'
import { ActionBar } from '../components/partials/ActionBar'

const StyledHomePage = styled.div`
  {
    padding-left: 5%;
    padding-right: 5%;
  }
  @media (max-width: 420px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  header {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    ${'' /* width: 100%; */}
    height: 60px;
    overflow: hidden;
    span {
      font-size: 3em;
    }
  }
  .company-subheader {
    font-size: 2em;
  }
  .company-autocomplete {
    width: 100%;
  }

  main {
    section + section {
      margin-top: 2rem;
    }
  }
`
export default class Company extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      ...dummySuppliers[props.match.params.companyId]
    }
  }

  render () {
    const { name } = this.state
    return (
      <StyledHomePage>
        <Row>
          <Col xs={24} sm={18} md={18} style={{paddingRight: '1%'}}>
            <header>
              <span>{name}</span>
              <ActionBar />
            </header>
            <main>
              <section>
                <Row>
                  <Col xs={24} sm={24} md={24} style={{paddingRight: '1%'}}>
                    <span className='info-subheader'>
                      人蔘 | 人参 | 인삼
                  </span>
                    <p>
                      {shortDescription}
                    </p>
                  </Col>
                </Row>
              </section>
              <section>
                <Row>
                  <Col xs={24} sm={24} md={24} style={{paddingRight: '1%'}}>
                    <span className='info-subheader'>
                      Types
                  </span>
                    <div style={{ background: '#ECECEC', padding: '30px' }}>
                      <Row gutter={16}>
                        <Col span={8}>
                          <Card title='American' bordered={false}>{shortDescription}</Card>
                        </Col>
                        <Col span={8}>
                          <Card title='Asian' bordered={false}>{shortDescription}</Card>
                        </Col>
                        <Col span={8}>
                          <Card title='Wild' bordered={false}>{shortDescription}</Card>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </section>
              <section>
                <Col xs={24} sm={24} md={24} style={{paddingRight: '1%'}}>
                  <span className='info-subheader'>
                    Benefits
                  </span>
                  <ul>
                    <li>1. {title}</li>
                    <li>2. {title}</li>
                    <li>3. {title}</li>
                    <li>4. {title}</li>
                  </ul>
                </Col>
              </section>
            </main>
          </Col>
          <Col xs={24} sm={6} md={6} style={{paddingLeft: '1%'}}>
            {/* <Recommended /> */}
          </Col>
        </Row>
      </StyledHomePage>
    )
  }
}
