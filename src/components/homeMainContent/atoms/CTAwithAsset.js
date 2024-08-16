import React from 'react'
import TextContainer from '../../hero/atoms/textContainer'
// import ImageContainer from '../../hero/atoms/imageContainer';
// import qrcode from '../assets/frame.png'
import bg from '../assets/diverse.png'

const content ={
  title: "Stay Updated",
  subtitle: "Keeping up with our Latest Activities",
  description: "Supporting families and engaging with the community are essential aspects of Warmheart Mentorship Service. Our commitment to these activities underscores the importance of a strong support system for the children we serve. Also, hosting events to recognize the contributions of our volunteers not only highlights their invaluable role but also reinforces our collective mission. Maintaining these engagements is crucial as they foster a sense of unity, celebrate achievements, and amplify the positive impact on families. By prioritizing family support, Warmheart Mentorship ensures a nurturing and thriving environment for everyone involved.",
  tagline: "Warmheart Mentorship: Empowering Families, Building Futures.",
  pathname: "/Take-Action"

}
function CTAwithAsset() {
  const {title, subtitle, description, tagline, pathname} = content;
  return (
    <div className='flex flex-col lg:flex-row' style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
      <TextContainer title={title} subtitle={subtitle} description={description} tagline={tagline} pathname={pathname} bg='transparent' textColor="white" font="16px"/>
      {/* <ImageContainer image={qrcode} alt_text="qr code for donations" /> */}
    </div>
  )
}

export default CTAwithAsset