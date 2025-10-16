import mubiLogo from "/logo.svg";

export default function Navbar() {
    return (
        <div className="w-full bg-mubi-blue p-4 h-16">
            <img className="w-[100px]" src={mubiLogo} alt="logo" />
        </div>
    );
}