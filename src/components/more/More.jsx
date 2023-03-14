import React from 'react'
import { Link } from 'react-router-dom'
import "./more.scss"

const More = () => {
  return (
    <div className='more container'>
      <div className='left-more'>
        <div className='left-img'>
          <img src="/assets/img/newsHero.svg" alt="" />
        </div>
        <div className='more-article'>
          <div className='more-date'>19.02.2022</div>
          <div className='more-info'>Yük maşınları Donanmanın təkmilləşdirilməsi üçün
təchizat zənciri maneələri ilə üzləşirlər</div>
        </div>
        <div className='more-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sagittis amet, id egestas et turpis convallis quis sit. Rhoncus dictum amet sapien nulla et, pretium. Pulvinar proin tellus, sit quam morbi non. Nullam vitae enim tortor arcu lacus felis eu. Tristique gravida ac egestas non varius condimentum. Lacus, nibh rhoncus viverra id risus praesent proin. Mauris varius aliquam neque placerat scelerisque nulla ultrices. Eget mi sed cras morbi eget magna suspendisse nam. Turpis dignissim amet, dictumst orci elementum. Nulla convallis tellus cras augue scelerisque. Nulla amet scelerisque mattis ut aenean ullamcorper bibendum mauris fermentum. Morbi cras enim nibh tempus risus, pretium arcu. Venenatis enim at donec ultrices. Arcu nullam augue accumsan, aliquet et feugiat. Sit ac quisque ac phasellus egestas. Ornare senectus in adipiscing platea in urna interdum. Faucibus at nunc ultricies ornare dolor ut dictum. Velit diam in eu diam ac, odio consequat etiam. Cursus purus in metus sit. Nam nisl ultrices habitasse vitae donec magnis. Ut proin ac proin interdum lorem
          commodo tellus.

          Sit scelerisque maecenas lectus amet iaculis porttitor sapien, gravida. Rhoncus egestas sed aliquet commodo tincidunt sem tellus. Sit mattis a, tortor bibendum. Tristique proin neque ornare ullamcorper. Molestie vel lacus, augue scelerisque erat turpis nunc, sapien. Auctor dui purus in senectus ullamcorper tellus. Nam eget nulla diam mauris convallis mollis sit. Odio nullam donec bibendum sed tempus integer aliquet. Faucibus sed dictum lorem senectus. Scelerisque morbi pellentesque id convallis massa. Maecenas mattis amet pulvinar nibh purus condimentum ullamcorper. Quam velit mollis auctor sed viverra. Integer id tristique vel sed donec laoreet risus vel. Amet pellentesque enim nullam sit ipsum egestas ipsum. Velit gravida at tempor, ipsum ac viverra consectetur eget fermentum. Aliquam pharetra vitae scelerisque quis sapien ipsum. Augue nibh tincidunt nulla pretium fermentum sit. Sit imperdiet scelerisque diam placerat. Vestibulum quam amet posuere urna egestas scelerisque tincidunt. Vitae viverra quam aliquam nisi est posuere scelerisque. Gravida placerat scelerisque purus fermentum ac. Lectus aliquam vitae ridiculus bibendum. Potenti pellentesque et malesuada elementum.</div>
        <div className='left-img'><img src="/assets/img/newsHero.svg" alt="" /></div>
        <div className='more-title-1'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam aliquet sed luctus mi sollicitudin eu.</div>
        <div className='more-text'>Sit scelerisque maecenas lectus amet iaculis porttitor sapien, gravida. Rhoncus egestas sed aliquet commodo tincidunt sem tellus. Sit mattis a, tortor bibendum. Tristique proin neque ornare ullamcorper. Molestie vel lacus, augue scelerisque erat turpis nunc, sapien. Auctor dui purus in senectus ullamcorper tellus. Nam eget nulla diam mauris convallis mollis sit. Odio nullam donec bibendum sed tempus integer aliquet. Faucibus sed dictum lorem senectus. Scelerisque morbi pellentesque id convallis massa. Maecenas mattis amet pulvinar nibh purus condimentum ullamcorper. Quam velit mollis auctor sed viverra. Integer id tristique vel sed donec laoreet risus vel. Amet pellentesque enim nullam sit ipsum egestas ipsum. Velit gravida at tempor, ipsum ac viverra consectetur eget fermentum. Aliquam pharetra vitae scelerisque quis sapien ipsum. Augue nibh tincidunt nulla pretium fermentum sit. Sit imperdiet scelerisque diam placerat. </div>
        
      </div>
      <div className='right-more'>
      <div className='row'>
            <div className='moree col-lg-4 col-md-12'>
                <div className='moree-img'>
                    <img src="/assets/img/news3.svg" alt="" />
                </div>
                <div className='moree-article'>
                    <div className='moree-date'>19.02.2022</div>
                    <div className='moree-info'>Yük maşınları Donanmanın
                        təkmilləşdirilməsi üçün təchizat zənciri maneələri ilə üzləşirlər</div>
                    <div className='moree-btn'><Link to="/detail">Ətraflı oxu <i className="fa-solid fa-chevron-right"></i></Link></div>
                </div>
            </div>
            <div className='moree col-4'>
                <div className='moree-img'>
                    <img src="/assets/img/news2.svg" alt="" />
                </div>
                <div className='moree-article'>
                    <div className='moree-date'>19.02.2022</div>
                    <div className='moree-info'>Yük Daşımaları Qiymətləri, Gecikmələr Kanadada Kesintilər Arasında Artır</div>
                    <div className='moree-btn'><Link to="/detail">Ətraflı oxu <i className="fa-solid fa-chevron-right"></i></Link></div>
                </div>
            </div>
            <div className='moree col-4'>
                <div className='moree-img'>
                    <img src="/assets/img/news1.svg" alt="" />
                </div>
                <div className='moree-article'>
                    <div className='moree-date'>19.02.2022</div>
                    <div className='moree-info'>Yük maşınları Donanmanın
                        təkmilləşdirilməsi üçün təchizat zənciri maneələri ilə üzləşirlər</div>
                    <div className='moree-btn'><Link to="/detail">Ətraflı <i className="fa-solid fa-chevron-right"></i></Link></div>
                </div>
            </div>
            <div className='moree col-lg-4 col-md-12'>
                <div className='moree-img'>
                    <img src="/assets/img/news3.svg" alt="" />
                </div>
                <div className='moree-article'>
                    <div className='moree-date'>19.02.2022</div>
                    <div className='moree-info'>Yük maşınları Donanmanın
                        təkmilləşdirilməsi üçün təchizat zənciri maneələri ilə üzləşirlər</div>
                    <div className='moree-btn'><Link to="/detail">Ətraflı oxu <i className="fa-solid fa-chevron-right"></i></Link></div>
                </div>
            </div>
            <div className='moree col-4'>
                <div className='moree-img'>
                    <img src="/assets/img/news2.svg" alt="" />
                </div>
                <div className='moree-article'>
                    <div className='moree-date'>19.02.2022</div>
                    <div className='moree-info'>Yük Daşımaları Qiymətləri, Gecikmələr Kanadada Kesintilər Arasında Artır</div>
                    <div className='moree-btn'><Link to="/detail">Ətraflı oxu <i className="fa-solid fa-chevron-right"></i></Link></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default More
