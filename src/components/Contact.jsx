import React, { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  return (
    <div id="contact" ref={ref} className='flex justify-center'>
      <a 
        href="mailto:akanshaoptimist@gmail.com?subject=Contact Us&body=Email: akanshaoptimist@gmail.com" 
        className='m-4 font-md text-xl py-2 mb-10 px-10 border-[2px] border-gray-200 text-gray-500 rounded-lg cursor-pointer'
      >
        akanshaoptimist@gmail.com
      </a>
    </div>
  );
});

export default Contact;
