import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container blogs-container'>
            <div>
                <h2 className='section-title'>Some Questions</h2>
                <div className='title-underline'></div>
            </div>
            <div className='blog'>
                <h4>Q1 : What's the difference between Authorization and Authentication ?</h4>
                <p>Ans : Some differences between Authorization and Authentication : <br />
                    1. Authentication is a validation process for checking user identity And Authorization is accessing permition of website's features and functionality. <br />
                    2. Authentication information is updatable or changable by user. But Authorization is not updatable by user. <br />
                    3. Authentication is the entered step of access functionality. But Authorization step starts after  Authentication. <br />
                    4. Authentication process is visible . But Authorization is hiding without Authentication. <br />
                    5. User is verifying by Authentication . But In the Authorization step user already verified.
                </p>
            </div>
            <div className='blog'>
                <h4>Q2 : Why are We using firebase? What other options do We have to implement Authentication ?</h4>
                <p>Ans : I am using firebase because it has many useful feature which is really nedded us. Some feature mentioned below : <br />
                    1. Authentication system is a very usefull feature of firebase . We can easily secure our app by this feature. <br />
                    2. Analytic system of firebse is more easier than others. We can analysis our app very easily. <br />
                    3. Realtime database is amazing feature of firebase. <br />
                    4. Cloud Messaging is very usefull and nedded feature of firebase. we can recieve or send message very easily through this feature. <br />
                    5. We can store our file by storage feature. And it is totally free. <br />
                    If we can find others authentication implement system, So that Auth0, Passport , MongoDB, okta, Keycloak, JSON Web Token will be good for you.

                </p>
            </div>
            <div className='blog'>
                <h4>Q3 : What other services does firebase provide other than authentication ?</h4>
                <p>Ans : Some other services Which firebase provide Us than authentication : <br />
                    1. Firebase provide us app hoisting system. We can host our app just by giving some commands. <br />
                    2. Analytic system of firebse is more easier than others. We can analysis our app very easily. <br />
                    3. Realtime database is amazing feature of firebase. <br />
                    4. Cloud Messaging is very usefull and nedded feature of firebase. we can recieve or send message very easily through this feature. <br />
                    5. We can store our file by storage feature. And it is totally free. <br />
                    Actually, there are a lot of useful feature in firebase. If you know detail about fire base, You can read the <a href="https://firebase.google.com/docs?authuser=0&hl=en">firebase documentation</a>.
                </p>
            </div>
        </div>
    );
};

export default Blogs;