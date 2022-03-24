import Form from './components/Form/Form'
import ResetApp from './App.style'
import styled from 'styled-components'
import aside from './assets/images/aside-banner.png'

const AppStyle = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

display: flex;

aside {
 height: 100vh;
 width: 585px;

 img {
   min-height: 100vh;
 }
}
`
function App () {

  return (
    <>
    <ResetApp></ResetApp>
    <AppStyle>
      <aside>
        <img src={aside} alt="" />
      </aside>
    <Form></Form>
    </AppStyle>
    </>
  )
}

export default App