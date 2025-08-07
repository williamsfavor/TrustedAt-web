import { Outlet } from "react-router";
import NavBar from "@/components/navbar";
import PageFooter from "@/components/footer";

export default function MainLayout(){

    return(
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <PageFooter></PageFooter>
        </>
    );
}