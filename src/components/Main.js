import React from 'react'
import btnIcon from "../images/message.png"

export default function Main() {
  return (
    <main>
      <section className="main--info">
        <h3 className="main--info_name">Laura Smith</h3>
        <p className="main--info_job">Frontend Developer</p>
        <p className="main--info_website"><a href="javascript(0)"> <span>LauraSmith_website</span> </a></p>
      </section>
      <section className='main--email'>
          <button className="main--email_btn">
              <img src={btnIcon} alt="" className='main--email_btn_icon'/>
              <span className='main--email_btn_title'>Email</span>
          </button>
      </section>
      <section className='main--intro'>
          <div className="main--intro_p">
            <h5>About</h5>
            <p className="main--intro_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime totam dicta obcaecati</p>
          </div>
          <div className="main--intro_p">
            <h5>Interests</h5>
            <p className="main--intro_content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum nemo fugiat</p>
          </div>
      </section>
    </main>
  )
}
