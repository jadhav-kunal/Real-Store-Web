import Image from "next/image";
import {
    UserIcon,
    ShoppingBagIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header(props) {
    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);

    return (
        <header className="sticky top-0 z-50">
            {/* Top nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        onClick={() => router.push("/")}
                        src="https://res.cloudinary.com/realstore/image/upload/v1630402706/Realstore/Real-logo_b8yks9.png"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer active:transform active:scale-90"
                    />
                </div>

                {/* Custom search bar */}
                <div className="hidden sm:flex items-center h-10 rounded-md bg-blue-400 hover:bg-blue-500 flex-grow cursor-pointer">
                    <input
                        type="text"
                        className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
                        placeholder={router.route === "/" ? "Search" : ""}
                        onInput={(event) =>
                            router.route === "/" &&
                            props.onSearchValue(event.target.value)
                        }
                    />
                    <SearchIcon className="h-12 p-4" />
                </div>

                {/* Right */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div
                        onClick={!session ? signIn : signOut}
                        className="link cursor-pointer flex">
                        <UserIcon className="h-6" />
                        <p className="hover:underline hidden md:inline font-extrabold md:text-sm mt-2">
                            {session
                                ? `Hello, ${session.user.name}`
                                : "Sign In"}
                        </p>
                    </div>
                    <div
                        className="link flex"
                        onClick={() => router.push("/orders")}>
                        <ShoppingBagIcon className="h-6" />
                        <p className="font-extrabold md:text-sm">Orders</p>
                    </div>
                    <div
                        className="relative link flex items-center"
                        onClick={() => router.push("/checkout")}>
                        <span
                            className={`absolute top-0 right-0 md:right-10 h-4 ${
                                items.length >= 10 ? "w-6" : "w-4"
                            } bg-blue-400 text-center rounded-full text-black font-bold`}>
                            {items.length}
                        </span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">
                            Basket
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
