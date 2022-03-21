import styled from 'styled-components'

const FormStyle = styled.div `
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;
  margin: 0 auto;
  flex-wrap: wrap;

  form {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 23px;
    padding: 80px 100px 50px 30px ;
  
    input[type=text] {
      width: 535px;
      height: 46px;
      border-radius: 6px;
      border: none;
      box-shadow: 1px 1px 5px gray;
      padding-left: 12px;

      &:focus {
        border: none;
      }
    }

    input[type=submit] {
      align-self: center;
      border-radius: 50px;
      height: 46px;
      padding: 16px 24px 16px 24px;
      background-color: #3754DB;
      font-weight: 600;
      border: none;
      color: white;

    }

    label {
      font-size: 14px;
      color: #425466;
      font-weight: 500;
    }

    label[for=meditionDay] { font-weight: 700; }

    h2 { font-size: 28px; }

    p { font-size: 16px; }

    input[placeholder] { color: #32323C80;}
  }
`

export const FormControl = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  gap: .5rem;
`

export const FormTitle = styled.div `
display: flex;
flex-direction: column;
gap: 0.3rem;
text-align: left;
margin-left: .5rem;

p {
  font-weight: 400;
  margin-top: 12px;
}

h2 { font-weight: 600; }
`
export const FormHour = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-self: center;
  gap: 18px;
  
  p {
    align-self: flex-start;
    font-weight: 700;
    color: #425466;
  }

  .form__hour {
    background-color: #F7FAFC;
    border: 1px solid #E5E5E5;
    height: 55px;
    width: 74.74px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form__hours {
    display: flex;
    gap: 18px ;
  }
`

export default FormStyle