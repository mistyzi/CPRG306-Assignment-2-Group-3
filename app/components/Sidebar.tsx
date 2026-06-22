export default function Sidebar() {
    return (
        <aside className="w-64 min-h-screen bg-blue-700 text-white flex flex-col py-8 px-6">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-10">
                <div className="w-9 h-9 bg-white rounded-md flex items-center justify-center">
                    <span className="text-blue-700 font-black text-lg">S</span>
                </div>
                <h1 className="text-xl font-bold tracking-wide">SAIT Portal</h1>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-4 text-sm font-medium">
                <a className="hover:bg-blue-600 px-3 py-2 rounded-md cursor-pointer">
                    Dashboard
                </a>
                <a className="hover:bg-blue-600 px-3 py-2 rounded-md cursor-pointer">
                    Students
                </a>
                <a className="hover:bg-blue-600 px-3 py-2 rounded-md cursor-pointer">
                    Programs
                </a>
                <a className="hover:bg-blue-600 px-3 py-2 rounded-md cursor-pointer">
                    Settings
                </a>
            </nav>

        </aside>
    );
}
