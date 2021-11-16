import React from 'react'

function Background() {
   return (
      <React.Fragment>
         <div className="bgGradient"></div>
         <style jsx>{`
            .bgGradient {
               background: linear-gradient(116deg, rgba(93,11,205,1) 0%, rgba(126,25,171,1) 43%, rgba(144,40,177,1) 43%, rgba(145,34,149,1) 65%, rgba(164,53,158,1) 65%, rgba(169,44,132,1) 88%, rgba(175,57,145,1) 88%, rgba(173,55,136,1) 100%);
               position: fixed;
               width: 104%;
               top: -20vh;
               left: -2%;
               height: 100vh;
               z-index: -1;
               transform: rotate(-10deg);
               border-bottom-left-radius: 9rem;
            } 
            @media (max-width:767px) {
               .bgGradient  {
                  width: 112%;
                  border-bottom-left-radius: 8rem;
                  transform: rotate(-8deg);
                  top: -5vh;
               }   
            }           
         `}</style>
      </React.Fragment>
      
   )
}

export default Background
