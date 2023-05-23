import React from 'react';

function Profile() {
    return (
      <div className='profile'>
      <div><img src="/aman.jpg" alt="Aman Roy" />
        
      <h2>Qualifications</h2>
<ul>
  <li>Completed 10th grade from St. vavier's Institution School</li>
  <li>Completed 12th grade from Techno India University(TIU)</li>
  <li>Currently pursuing BCA (Bachelor of Computer Applications) in final year</li>
</ul>



  <h2>Experience</h2>
  <p>Aspiring web developer with a strong passion for coding and creating dynamic web experiences. Constantly seeking opportunities to enhance my skills and stay up-to-date with the latest web development technologies.</p>
<div>
  <h3>Personal Profile Project:</h3>
  <ul>
    <li>Developed a personal profile website using HTML, CSS, and JavaScript to establish an online presence and showcase my skills and qualifications.</li>
    <li>Designed a visually appealing layout with a responsive design to ensure optimal viewing across different devices and screen sizes.</li>
    <li>Implemented interactive features such as navigation menus, animated transitions, and a contact form to enhance user engagement.</li>
    <li>Overcame challenges related to styling and layout to achieve a professional and polished look.</li>
    <li>Received positive feedback from viewers who appreciated the clean design and user-friendly interface of the personal profile.</li>
  </ul>
</div>

  
  {/* Add more sections for skills, social media handles, etc. */}
  <a href="/learn-react">Learn React</a> {/* Add the "learn react" link */}
</div>
      </div>
    );
  }
  
  export default Profile;
  