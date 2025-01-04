import * as React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

import KWYALogo from "../components/SVGs/kwyaLogo"

import Boom from "../components/SVGs/boom"

const IndexStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

const IndexPage = () => (
  <Layout>
    <IndexStyled>
      <KWYALogo />
    </IndexStyled>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
