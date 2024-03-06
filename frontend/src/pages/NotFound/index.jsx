import Navbar from '../../components/Navbar'

const NotFound = () => {
    return <>
        <Navbar />
        <div className="flex justify-center items-center h-[50vh] w-screen flex-col gap-1">
            <h1 className="text-3xl">Error 404</h1>
            <p>Your requested page is not found. Please double check the URL and try again.</p>
        </div>
    </>;
}

export default NotFound;