import React from 'react'
import styled from 'styled-components'
import { Row, Col, Card, Button } from 'antd'

import Recommended from '../components/partials/Recommended'
import { shortDescription, title } from '../constants/placeholders'
import Dictionary from '../constants/dictionary'
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
    justify-content: space-between;
    align-items: flex-end;
    height: 60px;
    overflow: hidden;
    span {
      font-size: 3em;
    }
  }
  .info-subheader {
    font-size: 2em;
  }
  .info-autocomplete {
    width: 100%;
  }
  .info-header-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    div {
      margin-left: 3rem;
    }
  }
  main {
    section + section {
      margin-top: 2rem;
    }
  }
`

export default class Info extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lang: 'en'
    }

    this.handleLangChange = this.handleLangChange.bind(this)
  }

  handleLangChange (event) {

  }

  render () {
    const lang = this.state.lang
    return (
      <StyledHomePage>
        <Row>
          <Col xs={24} sm={18} md={18} style={{paddingRight: '1%'}}>
            <header>
              <div className='info-header-left'>
                <span>{Dictionary.ginseng[lang]}</span>
                <div>
                  <a>en</a> | <a>cn</a>
                </div>
              </div>
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
                      {Dictionary.types[lang]}
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
            <Recommended />
          </Col>
        </Row>
      </StyledHomePage>

    )
  }
}
