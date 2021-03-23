import React from 'react';

const About = () => {
    return ( 
        <div className='bg-transparent h-screen flex flex-col
        justify-center items-center font-heebo px-4 max-w-5xl mx-auto'>
            <h1 className='text-6xl text-red-500 uppercase mb-4'>About Us</h1>
            <h2 className='text-4xl text-white uppercase mb-4'>A team of gamers</h2>
            <div className='shadow-2xl bg-gray-500 bg-opacity-50 text-gray-200 p-10 mt-12'>
                <p className='text-sm text-white text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur sed volutpat lectus, vitae consectetur nisi. 
                Sed risus lorem, tincidunt eget nibh eget, tincidunt faucibus tellus. 
                Sed ex urna, porta nec felis commodo, faucibus sagittis lectus. 
                Praesent tincidunt accumsan mi, sit amet blandit nulla ullamcorper 
                sollicitudin. Suspendisse vitae sodales tortor. Suspendisse hendrerit 
                condimentum risus ut tempor. Cras lobortis eleifend quam ut malesuada. 
                Etiam nisi lorem, dignissim quis ex non, cursus porttitor elit.
                </p>
                <p className='text-sm text-white text-center mt-6'>
                Sed fringilla eleifend cursus. Mauris placerat quam ante, non gravida 
                mi auctor vel. Sed tincidunt lacus nisi, ut efficitur felis condimentum 
                vel. Donec quis mauris et metus gravida pretium vulputate nec lorem. 
                Aenean iaculis massa non magna vestibulum fringilla. Vestibulum dictum 
                ante eget tristique eleifend. Vestibulum aliquet euismod ullamcorper. 
                Phasellus ex felis, feugiat ac risus nec, efficitur blandit nisl.
                </p>
            </div>
        </div>
     );
}
 
export default About;