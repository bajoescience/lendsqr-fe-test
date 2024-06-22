import companyIcon from '../img/Group.jpg'
import homeImg from '../img/pablo-sign-in 1.jpg'


const HomePage = () => {
  return (
    <>
      <article className='homepage'>
        <section className='section-1'>
          <div>
            <div className='hm-icon-con'>
              <img src={companyIcon} alt="Company Icon" width={174} height={36} />
            </div>
            <div className='hm-img-con'>
              <img src={homeImg} alt="Home" width={600} height={338} />
            </div>
          </div>
        </section>
        <section className='form-con'>
          <form>
            <h2>Welcome!</h2>
            <p>Enter details to login.</p>

            {/* Input fields container */}
            <div className='form-input-con'>
                <div>
                  <input type="text" placeholder='Email' className='email inputs' />
                </div>
                <div className='password-entry-con'>
                  <input type="password"  placeholder='Password' className='password inputs'/>
                  <button className='show-button'>SHOW</button>
                </div>
                <div>
                  <button className='forgot-button'>
                    FORGOT PASSWORD?
                  </button>
                </div>
                <div>
                  <button className='login-button'>LOG IN</button>
                </div>
            </div>
          </form>
        </section>
      </article>
    </>
  )
}

export default HomePage