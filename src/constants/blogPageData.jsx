import React from 'react'

function BlogPageData({card}) {
  return (
    <div className="flex flex-col px-16 mt-16 w-full text-sm font-light text-pink-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet={card?.imgSrc}
          className="w-full aspect-[1.64] max-md:max-w-full"
        />
        <div className="mt-14 text-xs max-md:mt-10 max-md:max-w-full">
          By admin Posted January 7, 2022 In Face, Skin
        </div>
        <div className="mt-12 leading-7 max-md:mt-10 max-md:max-w-full">
          I’m sharing a few tips and basics around how I use our range. We’ve
          been getting a few questions lately – which is great because it means
          people are switching to more natural products like the Facial Oil
          Cleanser and wanting to know exactly how to use it.
          <br />
          <br />
          So I’m going to share a little about my daily and weekly skincare
          routine about how I use our products, along with a little info or
          helpful tips of the product and what it’s good for etc.
          <br />
          <br />
          It’s important to remember that everyone’s skin is so individual. What
          works for you may not work for others and vice versa. There are also
          so many things which can affect our skin health – stress, hormones,
          hydration, diet, environmental factors, products etc the list goes on.
          So this is my guide to using our range, but if you like to use it
          another way or have any tips of your own, please share – I love
          hearing new ways of how you our beautiful customers use their
          products.
          <br />
          <br />
          Starting at the beginning and some say the most crucial to good skin.
          <br />
          <br />
          This is the first thing I notice is slacking in my routine if my skin
          is looking a little dull or having breakouts (along with diet and
          hormones). While I’ve been wearing less and less makeup the past year,
          cleansing at night can become a bit of a missed or lazy step. Now
          especially with summer and the festive season upon us, family
          gatherings, parties etc. it normally means more makeup and sunscreen
          so ensuring all makeup is removed at night helps your skin breathe,
          absorb product and regenerate during sleep.
        </div>
        <div className="mt-11 font-medium uppercase max-md:mt-10 max-md:max-w-full">
          Clensing
        </div>
        <div className="mt-7 leading-7 max-md:max-w-full">
          AM – most mornings in the shower I will use our Gentle Foaming
          Cleanser. Other mornings (if I’ve showered at night) or running out
          the door for a walk or swim, it’s a once over with a few spritzes of
          our face mist and a wipe over with a warm damp face cloth.
          <br />
          <br />
          PM – Time to double cleanse. This helps with taking off
          makeup/sunscreen, the ocean/sun/day with our Facial Cleansing Oil.
          Around 3-5 pumps. Being quite liberal with this to give skin a good
          facial massage and help the oil bind to all makeup and dirt. When
          you’re ready to remove, wet a flannel/face cloth with warm/hot water
          and wipe off. I like to then use the Gentle Foaming Cleanser as the
          second cleanse to remove any residual oil and dirt.
          <br />
          <br />
          After cleansing it’s onto our face mist & toner. Our Rose and Geranium
          Face Mist adds hydration, balances and prepares the skin for our
          moisturising products – especially oils. (It’s also amazing for a ton
          of other things too – helps to set makeup, great for after sun or in
          the esky at the beach, around 3pm or heading out after work, in aircon
          etc. for more info read here.)
        </div>
      </div>
  )
}

export default BlogPageData