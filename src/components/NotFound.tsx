import mubiLogo from "/logo.svg";
import deadComputer from "/dead-computer.svg";

export default function NotFound() {
    return (
        <div className="h-screen flex justify-center items-center border-2 border-black">
            <section
                id="404-content"
                className="w-full flex flex-col py-6 items-center"
            >
                <p className="text-2xl">
                    404 <span className="text-red-700 font-semibold">|</span>{" "}
                    Sorry, we couldn't find the page you are looking for
                </p>
                <img
                    src={deadComputer}
                    alt=""
                    style={{
                        width: 200,
                        height: 300,
                    }}
                />
            </section>
        </div>
    );
}
