import NavBar from "@/app/components/NavBar";



export default function generalLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <main>
               <NavBar></NavBar>
                {children}

            </main>
        </>

    );
}