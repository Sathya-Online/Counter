import { useNavigate } from "react-router-dom";


const Home = () => {

    const navigate = useNavigate();

    const handleCounter = () => {
        console.log('clicked');
        navigate('/counter');
    }

    return (
        <div className="home">
            <h1>Home Component</h1>
            <button onClick={handleCounter}>Counter</button>
        </div>
    );
}

export default Home;