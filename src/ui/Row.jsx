import styled, { css } from 'styled-components'

const Row = styled.div.attrs(props => ({ type: props.type || 'vertical' }))`
  display: flex;

  ${props =>
    props.type === 'horizontal' &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${props =>
    props.type === 'vertical' &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`

// This is deprecated with new styled-components version
// Row.defaultProps = {
//   type: 'vertical'
// }

export default Row
