import Hero from './Hero'

const Home = () => {
    return (
        <>
            <Hero text="React Movie Cards"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                        A basic application that displays a list of movies as a list of cards. Each card provides movie detail such as title, description, and image.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Home;
