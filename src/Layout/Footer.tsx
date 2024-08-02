const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="group-data-[layout=horizontal]:mx-auto group-data-[layout=horizontal]:max-w-screen-2xl w-full">
                    <div className="grid items-center grid-cols-1 text-center lg:grid-cols-2 text-slate-400 dark:text-zink-200 ltr:lg:text-left rtl:lg:text-right">
                        <div>
                            {new Date().getFullYear()} © ramadhan.
                        </div>
                        <div className="hidden lg:block">
                            <div className="ltr:text-right rtl:text-left">
                                ramadhan-dev
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
