import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { handleTranslation } from '../actions/translations'
import { Row, Col } from 'antd'
import Recommended from '../components/partials/Recommended'
import { shortDescription } from '../constants/placeholders'
import { dummySuppliers, dummyProducts } from '../constants/dummyData'
import { ActionBar } from '../components/partials/ActionBar'
import Dictionary from '../constants/dictionary'
import { CardItem } from '../components/partials/CardItem'
import isoImage from '../images/ISO_Certified_registered.png'

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
    ${''}
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
  .company-header-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    div {
      margin-left: 3rem;
    }
  }

  .company-product {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  main {
    section + section {
      margin-top: 2rem;
    }
  }
`

class Company extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lang: 'en',
      articles: [
        {
          _id: 1,
          img: 'image3.jpeg'
        },
        {
          _id: 2,
          img: 'image10.jpeg'
        },
        {
          _id: 3,
          img: 'image16.jpeg'
        }
      ],
      products: dummyProducts.filter((item) => {
        return item.supplier.toString() === props.match.params.companyId || false
      }),
      ...dummySuppliers[props.match.params.companyId]
    }
    this.handleLangChange = this.handleLangChange.bind(this)
  }

  handleLangChange (event) {
    this.setState({ lang: event.target.dataset.lang })
    this.props.handleTranslation(event.target.dataset.lang)
  }

  render () {
    const { translation } = this.props
    const { name } = this.state
    const { handleLangChange } = this

    const productsList = this.state.products.map(product => {
      return <CardItem
        key={product._id}
        _id={product._id}
        img={product.img}
        header={<h3><Link to={`/products/${product._id}`}>{product.name[translation]}</Link></h3>}
        subHeader={<p>{product.price} by <strong>
          <Link style={{ color: '#666' }} to={`/companies/${dummySuppliers[product.supplier]._id}`}>{dummySuppliers[product.supplier].name[translation]}</Link>
        </strong></p>}
      />
    })
    const articlesList = this.state.articles.map(article => {
      return <CardItem
        key={article._id}
        _id={article._id}
        img={article.img}
        header={<h3>{`${Dictionary.articles[translation]} ${article._id}`}</h3>}
        subHeader={<p>Lorem ipsum..</p>}
      />
    })
    return (
      <StyledHomePage>
        <Row>
          <Col xs={24} sm={18} md={18} style={{paddingRight: '1%'}}>
            <header>
              <div className='company-header-left'>
                <span>
                  {name[translation]}
                  {' '}
                  <img src={isoImage} alt='iso' style={{height: '0.8em'}} />
                </span>
                <div>
                  <a data-lang='en' onClick={handleLangChange}>en</a> | <a data-lang='cn' onClick={handleLangChange}>cn</a>
                </div>
              </div>
              <ActionBar />
            </header>

            <main>
              <section>
                <Row>
                  <Col xs={24} sm={24} md={24} style={{paddingRight: '1%'}}>
                    <p>
                      {shortDescription}
                    </p>
                  </Col>
                </Row>
              </section>
              <section>
                <Row>
                  <Col xs={24} sm={24} md={24} style={{paddingRight: '1%'}}>
                    <span className='company-subheader'>
                      {Dictionary.products[translation]}
                    </span>
                    <div className='company-product'>
                      {productsList}
                    </div>
                  </Col>
                </Row>
              </section>
              <section>
                <Row>
                  <Col xs={24} sm={24} md={24} style={{paddingRight: '1%'}}>
                    <span className='company-subheader'>
                      {Dictionary.articles[translation]}
                    </span>
                    <div className='company-product'>
                      {articlesList}
                    </div>
                  </Col>
                </Row>
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

function mapStateToProps (state, props) {
  const {translation} = state
  return {
    translation
  }
}

export default connect(mapStateToProps, {handleTranslation})(Company)
