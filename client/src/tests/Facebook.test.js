import { FacebookLogin } from 'react-facebook-login/dist/facebook-login-render-props'
import Facebook from '../components/Facebook'
import { mount, shallow } from 'enzyme'
import Button from 'react-bootstrap/Button'
jest.mock('../components/Facebook')

// beforeEach(() => {
//   Facebook.mockClear()
// })

// it('check if facebook constructor is called', () => {
//   const fb = new Facebook()
//   expect(Facebook).toHaveBeenCalledTimes(1)
// })

// it('Content isnt null', () => {
//   const fb = new Facebook()
//   fb.setState(true)
//   expect(fb.getFBCont()).not.toBeNull()
// })
