import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Header from "../Shared/Navbar/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <BreakingNews></BreakingNews>
     
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 " >
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border">
                    <h2 className="text-4xl">News comming soon...</h2>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;