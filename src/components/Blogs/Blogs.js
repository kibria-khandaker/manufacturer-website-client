import React from 'react';

const Blogs = () => {

    return (
        <div className='my-32 px-5 md:w-9/12 lg:w-6/12 mx-auto'>


            {/* --------------------------------------  */}
            <h2 className=' font-bold'>Question 14.1: How will you improve the performance of a React Application? </h2>
            <p> <span className=' font-bold'> Answer: </span> <br />
                Optimize is very important So try Maximum Optimize React-rendering, and also try to avoid over-rendering unnecessary features. need to make confirm that react components receive only necessary props.. .Avoid inline functions as much as possible.  Immutability is the key to avoid unnecessary re-renders. Always render hidden components like a modal and Dropdown conditionally. Always call multiple APIs parallelly.
            </p>


            {/* --------------------------------------  */}
            <div className="divider"></div>

            <h2 className=' font-bold'> Question 14.2: What are the different ways to manage a state in a React application? </h2>
            <p> <span className=' font-bold'> Answer: </span> <br />

                The Four Kinds of React State to Manage:
                <b>(1) Local state, (2) Global state, (3)Server state, (4) URL state</b>

                <br />
                <br />
                <b>More Details:</b>
                <br />
                <p><b>(1) Local state: </b> Local state is data we tend to manage in one or another component. native state is most frequently managed in React exploitation the useState hook.</p>

                <p><b>(2) Global state :</b> Global state is important after we wish to induce and update information anyplace in our app, or in multiple elements a minimum of.
                </p>

                <p><b>(3)Server state :</b> Server state may be a easy concept, however are often onerous to manage aboard all of our local and global UI state.</p>

                <p><b>(4) URL state : </b> URL state is commonly missing as a category of state, however it's a very important one.
                    In several cases, a lot of major elements of our application rely on accessing url state. try and imagine building a web log while not having the ability to fetch a post based mostly off of its slug or id that's located within the URL! </p>
            </p>


            {/* --------------------------------------  */}
            <div className="divider"></div>

            <h2 className=' font-bold'> Question 14.3: How does prototypical inheritance work? </h2>
            <p> <span className=' font-bold'> Answer: </span> <br />
                Prototypic inheritance refers to the ability to access object properties from another object.. Prototype-based programming may be a form of object-oriented, programming during which behavior utilize is performed via a method of reusing existing objects that function prototypes. This model may be referred to as prototypic, prototype-oriented, classless, or instance-based programming. prototype-based programming uses generalized objects, which might then be cloned and extended.
                You make prototype objects, so … build new instances. Objects ar changeable in JavaScript, thus we will augment the new instances, giving them new fields and ways. These will then act as prototypes for even newer objects. we do not would like classes to form a lot of similar objects… Objects inherit from objects. What might be a lot of object-oriented than that?
            </p>


            {/* --------------------------------------  */}
            <div className="divider"></div>

            <h2 className=' font-bold'> Question 14.4: Why you do not set the state directly in React .
                <span className=' font-semibold italic0'>
                    For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.
                </span>
            </h2>
            <p> <span className=' font-bold'> Answer: </span> <br />
                Before updating the value of the state, we want to create an initial state setup. Once we tend to are done with it, we tend to use the setState() method the state object. It ensures that the component has been updated and incorporate re-rendering of the component.
                <br />
                Here products = [...] it's not make new elements for state or unable update State , they not give new value just copy from previous not change value of properties setProducts() .   But setProducts get a value for setProducts and  setProducts make a environment for render using useState([]) and able to chang Update State.
            </p>


            {/* --------------------------------------  */}
            <div className="divider"></div>

            <h2 className=' font-bold'> Question 14.5: You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name? </h2>
            <p> <span className=' font-bold'> Answer: </span> <br />

                <div>
                    <img className='my-5 p-5' src="https://i.ibb.co/TgHz5CB/Screenshot-1886.png" alt="search to find products by name" />

                    <p><b> Code Link in my Github gist :</b>  https://gist.github.com/kibria-khandaker/e3cabd72fac7b66a2fd5605c5520946f </p>
                </div>
                {/*
            
                function search(nameKey, myArray){
                    for (let i=0; i < myArray.length; i++) {
                        if (myArray[i].name === nameKey) {
                            return myArray[i];
                        }
                    }
                }

                const array = [
                {name:"type name", value:"my value-1", price:5000, description:"this is a description 1"  },
                {name:"my name 2", value:"my value-2", price:4000, description:"this is a description 21"  },
                {name:"my name 2", value:"my value-2", price:4000, description:"this is a description 21"  },
                ];

                const resultObject = search("type name", array);

                console.log(resultObject.name);

                console.log(resultObject.value);

                console.log(resultObject.price); 
                
                */}



            </p>

            {/* --------------------------------------  */}
            <div className="divider"></div>

            <h2 className=' font-bold'>  Question 14.6:  What is a unit test? Why should write unit tests? </h2>
            <p> <span className=' font-bold'> Answer: </span> <br />
                Unit testing is the testable unit of application. the testing technique wherever individual units/components ar tested in isolation.
                <br /> <br />
                Unit testing is mostly dispensed by developers throughout the development section of an application. it's the extent of testing at that the components of the package are tested. To perform unit testing, a developer writes a piece of code (unit tests) to verify the code to be tested (unit) is correct. thus Developers write unit tests for his or her code to create sure that the code works properly. This helps to observe and defend against bugs within the future.
                <br />
                Unit testing ensures that all code meets quality standards before it's deployed. Unit testing ensures that all code meets quality standards before it's deployed.
            </p>


        </div>
    );
};

export default Blogs;