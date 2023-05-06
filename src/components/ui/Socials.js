import '../../stylesheets/ui/socials.css';
import {FaFacebookF,AiFillInstagram,AiOutlineTwitter,BsDiscord} from '../../assets/icons';

export default function Socials() {
  return (
    <div className='socials'>
      <div className='socials_links'> 
        <span className='social_links facebook' >
          <FaFacebookF className='link' />
        </span>
        <span className='social_links insta' >
          <AiFillInstagram className='link' />
        </span>
        <span className='social_links twitter' >
          <AiOutlineTwitter className='link' />
        </span>
        <span className='social_links discord' >
          <BsDiscord className='link' />
        </span>
      </div>
    </div>
  )
}
