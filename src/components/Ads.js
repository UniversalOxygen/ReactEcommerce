import React from 'react'
import AdsImage1 from '../Images/Ads.png'
import AdsImage2 from '../Images/Ads2.png'
import AdsImage3 from '../Images/Ads3.png'
import AdsImage4 from '../Images/Ads4.png'




const Ads = () => {
  
  var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++
  if(counter > 4){
    counter = 1;
  }
}, 5000);

  return (
    <div id='Ads'>
      <div id='Ads1' >

        <input type="radio" name='radioBtn' id='radio1' />
        <input type="radio" name='radioBtn' id='radio2' />
        <input type="radio" name='radioBtn' id='radio3' />
        <input type="radio" name='radioBtn' id='radio4' />

        <div className='slideAds first'>
          <img src={AdsImage1} alt="images of advert" />
        </div>
        <div className='slideAds'>
          <img src={AdsImage2} alt="images of advert" />
        </div>
        <div className='slideAds'>
          <img src={AdsImage3} alt="images of advert" />
        </div>
        <div className='slideAds'>
          <img src={AdsImage4} alt="images of advert" />
        </div>

        <div className='navigationAuto'>
          <div className='autoBtn1'></div>
          <div className='autoBtn2'></div>
          <div className='autoBtn3'></div>
          <div className='autoBtn4'></div>
        </div>

        <div className='navigationManual'>
          <label htmlFor="radio1" className='manualBtn1'></label>
          <label htmlFor="radio2" className='manualBtn2'></label>
          <label htmlFor="radio3" className='manualBtn3'></label>
          <label htmlFor="radio4" className='manualBtn4'></label>
        </div>


      </div>
    </div>
  )
}

export default Ads