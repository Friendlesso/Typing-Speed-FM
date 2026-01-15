import DesktopLogo from '../../assets/icons/logo-large.svg';
import MobileLogo from '../../assets/icons/logo-small.svg';

export function Logo() {
  return (
    <div>
      <img className='sm:block hidden' src={DesktopLogo} alt="Typing speed test logo" />
      <img className='sm:hidden block' src={MobileLogo} alt="Typing speed test logo" />
    </div>
  )
}