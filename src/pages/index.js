import React from "react"
import { MailIcon, ChevronDownIcon } from "@heroicons/react/outline"
import { StaticImage } from "gatsby-plugin-image"
import Collapsible from "react-collapsible"
import { Helmet } from "react-helmet"

const getCurrentYear = () => {
  return new Date().getFullYear();
};

export default function Home() {
  return <div>
  <Helmet>
    <meta charSet="utf-8" />
    <title>Jane Doe - Web Developer | Graphic Designer</title>
    <meta name="title" content="Jane Doe" />
    <meta name="description" content="Jane Doe is a web developer/graphic designer based in London, UK." />
    
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://site-url.com" />
    <meta property="og:title" content="Jane Doe - Web Developer | Graphic Designer" />
    <meta property="og:description" content="Jane Doe is a web developer/graphic designer based in London, UK." />
    {/* Place your Open Graph image in the static folder */}
    <meta property="og:image" content="https://site-url.com/og.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Jane Doe." />
    
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://site-url.com" />
    <meta property="twitter:title" content="Jane Doe - Web Developer | Graphic Designer" />
    <meta property="twitter:description" content="Jane Doe is a web developer/graphic designer based in London, UK." />
    <meta property="twitter:image" content="https://site-url.com/og.png" />
    <meta property="twitter:image:alt" content="Jane Doe." />
  </Helmet>
  <div className="min-h-4 bg-gradient-to-r from-pink-400 via-blue-400 to-green-400">&nbsp;</div>
  <div className="container">

    {/* Intro */}
    <header>
    <div className="my-24 lg:my-28 p-6">
      <h1>Hi! <wbr />I&rsquo;m Jane<span className="gradient-text">.</span></h1>
      <p className="text-2xl font-bold">A&nbsp;<span className="gradient-text">web developer</span> and <span className="gradient-text">graphic designer</span> based in London, UK.</p>
      <a href="mailto:your-email@email.com"><button className="btn-gradient mt-3">Chat with me <MailIcon className="h-6 w-6 inline" /></button></a>
    </div>
    </header>
    {/* End Intro */}

    {/* Services */}
    <section>
    <div className="dark:shadow-md shadow rounded-lg p-6 dark:bg-gray-900 bg-gray-100 mt-12 two-cols">
      <div className="m-auto order-2 md:order-1">
      <h2>Web Design/​Development</h2>
      <p>I specialize in designing and building responsive websites that look and perform great on every platform and screen size.</p>
      <div className="flex flex-wrap gap-2">
        <div className="tag">HTML</div>
        <div className="tag">CSS</div>
        <div className="tag">JavaScript</div>
        <div className="tag">GatsbyJS</div>
        <div className="tag">React</div>
        <div className="tag">GraphQL</div>
        <div className="tag">GitHub</div>
        <div className="tag">Netlify</div>
        <div className="tag">Tailwind CSS</div>
        <div className="tag">Bootstrap</div>
      </div>
      </div>
      <StaticImage 
        src="https://source.unsplash.com/m_HRfLhgABo/800x600"
        alt="Coding."
        className="rounded-lg order-1 md:order-2"
        width="800"
        height="600"
      />
    </div>

    <div className="dark:shadow-md shadow rounded-lg p-6 dark:bg-gray-900 bg-gray-100 mt-12 two-cols">
      <StaticImage 
        src="https://source.unsplash.com/fr7SSrc43AQ/800x600"
        alt="Graphic design."
        className="rounded-lg"
        width="800"
        height="600"
      />
      <div className="m-auto">
      <h2>Graphic Design</h2>
      <p>I deliver beautifully created digital and print collaterals, including but not limited to posters, flyers, business cards, social media assets, and banners.</p>
      <div className="flex flex-wrap gap-2">
        <div className="tag">Figma</div>
        <div className="tag">Illustrator</div>
        <div className="tag">Photoshop</div>
      </div>
      </div>
    </div>
    </section>
    {/* End Services */}

    {/* Works */}
    <section>
    <div className="three-cols mt-20 mb-12">
      <div className="dark:shadow-md shadow rounded-lg dark:bg-gray-900">
        <StaticImage 
          src="https://source.unsplash.com/zNRITe8NPqY/800x600"
          alt="Some alt text goes here."
          className="rounded-t-lg mb-5"
          width="800"
          height="600"
        />
        <div className="px-6 pt-3 py-8">
          <p><span className="web pill">Web Design/Development</span></p>
          <h2 className="client"><a href="http://example.com/" target="_blank" rel="noreferrer noopener">Example Website &raquo;</a></h2>
          <p className="year">E-commerce | Summer, 2021</p>
          <div className="flex flex-wrap gap-2">
            <div className="tag">GatsbyJS</div>
            <div className="tag">GitHub</div>
            <div className="tag">Airtable</div>
            <div className="tag">GraphQL</div>
            <div className="tag">Tailwind CSS</div>
          </div>
        </div>
      </div>

      <div className="dark:shadow-md shadow rounded-lg dark:bg-gray-900">
        <StaticImage 
          src="https://source.unsplash.com/KiEiI2b9GkU/800x600"
          alt="Some alt text goes here."
          className="rounded-t-lg mb-5"
          width="800"
          height="600"
        />
        <div className="px-6 pt-3 py-8">
          <p><span className="web pill">Web Design/Development</span></p>
          <h2 className="client"><a href="http://example.com/" target="_blank" rel="noreferrer noopener">Another Website &raquo;</a></h2>
          <p className="year">Community | Spring, 2021</p>
          <div className="flex flex-wrap gap-2">
            <div className="tag">GatsbyJS</div>
            <div className="tag">GitHub</div>
            <div className="tag">Airtable</div>
            <div className="tag">GraphQL</div>
            <div className="tag">IFTTT</div>
            <div className="tag">Tailwind CSS</div>
          </div>
        </div>
      </div>

      <div className="dark:shadow-md shadow rounded-lg dark:bg-gray-900">
        <StaticImage 
          src="https://source.unsplash.com/iXHdGk8JVYU/800x600"
          alt="Some alt text goes here."
          className="rounded-t-lg mb-5"
          width="800"
          height="600"
        />
        <div className="px-6 pt-3 py-8">
          <p><span className="design pill">Graphic Design</span></p>
          <h2 className="client">A Beautiful Poster</h2>
          <p className="year">Some Shop | October, 2020</p>
        </div>
      </div>

      
    </div>
    
    {/* Collapsible Section */}
    <Collapsible trigger={["See more", <ChevronDownIcon className="h-6 w-6 inline" />]}>
      <div className="three-cols mt-12">

      <div className="dark:shadow-md shadow rounded-lg dark:bg-gray-900">
        <StaticImage 
          src="https://source.unsplash.com/9H0ZA1oPsYE/800x600"
          alt="Some alt text goes here."
          className="rounded-t-lg mb-5"
          width="800"
          height="600"
        />
        <div className="px-6 pt-3 py-8">
          <p><span className="web pill">Web Design/Development</span></p>
          <h2 className="client"><a href="http://example.com/" target="_blank" rel="noreferrer noopener">Another Website I Designed &raquo;</a></h2>
          <p className="year">Musician | Summer, 2020</p>
          <div className="flex flex-wrap gap-2">
            <div className="tag">GatsbyJS</div>
            <div className="tag">Netlify</div>
            <div className="tag">GitHub</div>
            <div className="tag">Airtable</div>
            <div className="tag">GraphQL</div>
            <div className="tag">Bootstrap</div>
          </div>
        </div>
      </div>
        
        <div className="dark:shadow-md shadow rounded-lg dark:bg-gray-900">
          <StaticImage 
            src="https://source.unsplash.com/VMw2NdUzHKQ/800x600"
            alt="Some alt text goes here."
            className="rounded-t-lg mb-5"
            width="800"
            height="600"
          />
          <div className="px-6 pt-3 py-8">
            <p><span className="design pill">Graphic Design</span></p>
            <h2 className="client">Business Cards</h2>
            <p className="year">This Artist | Summer, 2020</p>
            <div className="flex flex-wrap gap-2">
              <div className="tag">GatsbyJS</div>
              <div className="tag">Netlify</div>
              <div className="tag">GitHub</div>
              <div className="tag">Airtable</div>
              <div className="tag">GraphQL</div>
              <div className="tag">Bootstrap</div>
            </div>
          </div>
        </div>

        <div className="dark:shadow-md shadow rounded-lg dark:bg-gray-900">
          <StaticImage 
            src="https://source.unsplash.com/Epw-SqZYeyw/800x600"
            alt="Some alt text goes here."
            className="rounded-t-lg mb-5"
            width="800"
            height="600"
          />
          <div className="px-6 pt-3 py-8">
            <p><span className="design pill">Graphic Design</span></p>
            <h2 className="client">Awesome-Looking Logo</h2>
            <p className="year">This Supermarket | February, 2020</p>
          </div>
        </div>

        
      </div>
    </Collapsible>
    </section>
    {/* End Collapsible Section */}
    {/* End Works */}
  </div>
  
  {/* More */}
  <section>
  <div className="bg-gray-100 dark:bg-gray-900 mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-8">
    <div className="more">&nbsp;</div>
    <div className="p-6 m-auto">
      <h2><span>More About Me</span></h2>
      <h3>Languages</h3>
      <div className="flex flex-wrap gap-2">
        <div className="tag">English</div>
        <div className="tag">French</div>
        <div className="tag">Italian</div>
      </div>
      <h3 className="mt-3">Current Interests</h3>
      <div className="flex flex-wrap gap-2">
        <div className="tag">no-code</div>
        <div className="tag">automation</div>
        <div className="tag">Jamstack</div>
        <div className="tag">headless CMS</div>
      </div>
    </div>
  </div>
  </section>
  {/* End More */}

  {/* Testimonial */}
  <section>
  <div className="container mt-36">
    <div className="dark:shadow-md shadow p-6 rounded-lg dark:bg-gray-900 xl:w-2/3 mx-auto text-center">
    <StaticImage 
      src="https://source.unsplash.com/rriAI0nhcbc/200x200"
      width={80}
      height={80}
      alt="Some Person."
      className="rounded-full -mt-16 mb-8"
    />
    <p><span className="font-serif">“</span>Ornare vel facilis sociosqu habitasse quasi, sollicitudin veritatis, aenean! Doloremque ipsum fermentum, eos blanditiis modi adipisicing eiusmod dolore? Accumsan lorem nibh dictumst eiusmod! Numquam scelerisque.<span className="font-serif">”</span></p>
    <p><span className="gradient-text font-bold text-2xl">John Doe</span><br /><span className="text-sm font-bold">Company, Inc.</span></p>
    </div>
  </div>
  </section>
  {/* End Testimonial */}

  {/* Footer */}
  <footer>
  <div className="mt-20 bg-gray-100 dark:bg-gray-900">
    <div className="container pt-12 text-center">
    <h2>Like what you see?</h2>
    <a href="mailto:your-email@email.com"><button className="btn-gradient mt-3">Chat with me <MailIcon className="h-6 w-6 inline" /></button></a>
    

    <div className="max-w-md mx-auto mt-12 border-t dark:border-gray-50 border-gray-200 py-10">
    <p>{getCurrentYear()} &copy; Jane Doe</p>
    </div>
    </div>
  </div>
  </footer>
  {/* End Footer */}
</div>
}